import { Keyword } from 'pluto-rd';
import { Query } from '../db/Query';
import * as Promise from 'bluebird';

export class KeywordDao {
    public findAllKeywords(): Promise<Keyword[]> {
        return Query.findAllKeywords();
    }
    
    public countEntries(): Promise<number> {
        return Query.countAllEntries();
    }
    
    // private findKeywordByHandle(handle: string): Keyword {
    //     return this.query<Keyword>();
    // }
}