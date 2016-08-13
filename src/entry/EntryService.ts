import { EntryResult } from 'pluto-rd';
import { EntryDao } from '../dao/EntryDao';

export class EntryService {
    private dao: EntryDao;
    
    constructor() {
        this.dao = new EntryDao();
    }
    
    public getEntries(keyword, offset, count): EntryResult {
        return this.dao.findWithKeywordLimited(keyword, offset, count);
    }
}