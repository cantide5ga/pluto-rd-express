import { Keyword } from 'pluto-rd';
import { Query } from '../db/Query';

export class KeywordDao {
    public findAllKeywords(): Keyword[] {
        return Query.findAllKeywords();
    }
    
    public countEntries(): number {
        return Query.countAllEntries();
    }
    
    // private findKeywordByHandle(handle: string): Keyword {
    //     return this.query<Keyword>();
    // }
}