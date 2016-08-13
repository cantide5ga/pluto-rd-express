import { Entry, EntryResult } from 'pluto-rd';
import { Query } from '../db/Query';

//test with MySQL Docker container
export class EntryDao {
    public findWithKeywordLimited(keyword, offset, count): EntryResult {
        const paged = Query.findEntriesWithKeywordLimited(keyword, offset, count);
        const unlimited = Query.countEntriesWithKeyword(keyword);
        
        return {
            pagedEntries: paged,
            totalCount: unlimited
        }
    }
}