import { Connection } from '../common/Connection';
import { connection } from './Driver';
import { Statement } from './MySqlStatement';
import { Entry, Keyword } from 'pluto-rd';

export class MySqlConnection implements Connection {
    private connection;
    
    constructor() {
        this.connection = connection;
    }
    
    public countEntriesWithKeyword(handle: string): number {
        const stmt = Statement.countEntriesWithKeywordStmt
        
        this.connection.execute(stmt, handle, (err, rows) => {
            
        });
        return
    };
    
    public findEntriesWithKeywordLimited(handle, offset, count): Entry[] {
        return
    };
    
    public findAllKeywords(): Keyword[] {
        return
    }
    
    public countAllEntries(): number {
        return
    }
}