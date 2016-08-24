import { Entry, EntryResult, Keyword } from 'pluto-rd';
import { EntryDao, KeywordDao } from '../dao/DaoFactory';
import * as Promise from 'bluebird';
import { ApiResponse } from '../common/ApiResponse';
import { IEntryDao, IKeywordDao } from 'pluto-rd-express';

export class EntryService {
    private entryDao: IEntryDao<Entry, Keyword>;
    private kwDao: IKeywordDao<Keyword>;
    
    constructor() {
        this.entryDao = new EntryDao();
        this.kwDao = new KeywordDao();
    }
    
    public getEntries(keyword, offset, count): Promise<EntryResult> {
        return this.entryDao
            .findWithKeywordLimited(keyword, offset, count)
            .then(entries => {
                if(!entries.pagedEntries.length) {
                    return Promise.reject(ApiResponse.NOT_FOUND());
                }
                return entries;    
            });
    }
    
    public addEntry(entry: Entry): Promise<number> {
        return this
        //create new keywords
        .kwDao.createIfNotExists(
            entry.keywords.map(handle => {
                return this.buildKeyword(handle);
            }
        ))
        .then(() => {
            //collect all tagged keywords in this entry
            return this.kwDao.findKeywordsByHandles(entry.keywords);     
        })
        .then(keywords => {
            return Promise.join(
                //increase tagged count
                this.kwDao.updateCounts(keywords),
                //create new entry
                this.entryDao.createWithKeywords(entry, keywords),
                ((updatedKws, createdEntry) => {
                    return createdEntry;   
                })
            )    
        })
    }
    
    private buildKeyword(handle: string): Keyword {
        return {
           handle: handle,
           count: 0,
           lastTagged: new Date(),
           hits: 0 
        }
    }
}