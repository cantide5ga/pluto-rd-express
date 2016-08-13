import { Keyword } from 'pluto-rd'
import { KeywordDao } from '../dao/KeywordDao';
import * as Promise from 'bluebird';

export class KeywordService {
    private dao: KeywordDao;
    
    constructor() {
        this.dao = new KeywordDao();
    }
    
    public getKeywords(): Promise<Keyword[]> {
        return this.dao.findAllKeywords();
    }
    
    public getEntryCount(): Promise<number> {
        return this.dao.countEntries();
    }
}