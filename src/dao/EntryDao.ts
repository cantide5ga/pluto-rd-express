import { Entry, EntryResult } from 'pluto-rd';
import { Query } from '../db/Query';
import * as Promise from 'bluebird';

//test with MySQL Docker container
export class EntryDao {
    public findWithKeywordLimited(keyword, offset, count): Promise<EntryResult> {
        
        return Promise.join(
            Query.findEntriesWithKeywordLimited(keyword, offset, count),
            Query.countEntriesWithKeyword(keyword),
            (paged, unlimited) => {
                return {
                    pagedEntries: paged,
                    totalCount: unlimited
                } 
            }
        )
    }
}