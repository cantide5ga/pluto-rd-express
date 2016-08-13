import { Connection } from '../common/Connection';
import { connection } from './Driver';
import { Statement } from './MySqlStatement';
import { Entry, Keyword } from 'pluto-rd';
import * as Promise from 'bluebird';

export class MySqlConnection implements Connection {
    private connection;
    private exec: (stmt: string, args: any[]) => Promise<Array<any>>;
    
    constructor() {
        this.connection = connection;
        this.exec = Promise.promisify<Array<any>, string, Array<string>>(this.connection.execute);
    }
        
    public countEntriesWithKeyword(handle: string): Promise<number> {
        const stmt = Statement.countEntriesWithKeywordStmt;
        
        return this.exec(stmt, [ handle ])
        .then(result => {
            return result[0];    
        });
    };
    
    public findEntriesWithKeywordLimited(handle, offset, count): Promise<Entry[]> {
        const stmt = Statement.findEntriesWithKeywordLimitedStmt;
        return this.exec(stmt, [handle, offset, count]);
    };
    
    public findAllKeywords(): Promise<Keyword[]> {
        const stmt = Statement.findAllKeywordsStmt;
        return this.exec(stmt, []);
    }
    
    public countAllEntries(): Promise<number> {
        const stmt = Statement.countAllEntriesStmt;
         return this.exec(stmt, [])
        .then(result => {
            return result[0];    
        });
    }
}