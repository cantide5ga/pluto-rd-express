import { EntryResult } from 'pluto-rd';
import { EntryDao } from '../dao/EntryDao';
import * as Promise from 'bluebird';

export class EntryService {
    private dao: EntryDao;
    
    constructor() {
        this.dao = new EntryDao();
    }
    
    public getEntries(keyword, offset, count): Promise<EntryResult> {
        return this.dao.findWithKeywordLimited(keyword, offset, count);
    }
}