import { Connection } from './common/Connection';
import * as factory from './ConnectionFactory';
import { Vendor } from './ConnectionFactory';
import { Entry, Keyword } from 'pluto-rd';

class QueryStatic implements Connection { //as contract
    private connection: Connection;
    
    constructor() {
        this.connection = factory.of(Vendor.MYSQL);
    }
    
    public countEntriesWithKeyword(handle: string): number {
        return this.connection
        .countEntriesWithKeyword(handle);
    };
    
    
    public findEntriesWithKeywordLimited(handle, offset, count): Entry[] {
        return this.connection
        .findEntriesWithKeywordLimited(handle, offset, count);
    };
    
    public findAllKeywords(): Keyword[] {
        return this.connection
        .findAllKeywords();
    }
    
    public countAllEntries(): number {
        return this.connection
        .countAllEntries();
    }    
}

export const Query = new QueryStatic();






