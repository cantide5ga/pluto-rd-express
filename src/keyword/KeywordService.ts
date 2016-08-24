import { Keyword } from 'pluto-rd'
import * as Promise from 'bluebird';
import { IEntryDao, IKeywordDao } from 'pluto-rd-express';
import { EntryDao, KeywordDao } from '../dao/DaoFactory';

export class KeywordService {
    private dao: IKeywordDao<Keyword>;
    
    constructor() {
        this.dao = new KeywordDao();
    }
    
    public getKeywords(): Promise<Keyword[]> {
        return this.dao.findAll();
    }
    
    public getEntryCount(): Promise<number> {
        return //this.dao.countEntries();
    }
}