import { Keyword } from 'pluto-rd'
import { KeywordDao } from '../dao/KeywordDao';

export class KeywordService {
    private dao: KeywordDao;
    
    constructor() {
        this.dao = new KeywordDao();
    }
    
    public getKeywords(): Keyword[] {
        return this.dao.findAllKeywords();
    }
    
    public getEntryCount(): number {
        return this.dao.countEntries();
    }
}