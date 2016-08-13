import { Request } from 'express';
import { KeywordService } from './KeywordService';
import { KeywordResponse } from './KeywordResponse';

export class KeywordResource {
    private delegate: KeywordService;
    
    constructor() {
        this.delegate = new KeywordService();
    }
    
    public getResponse(): string {
        const obj: KeywordResponse = {
            keywords: this.delegate.getKeywords(),
            entryCount: this.delegate.getEntryCount()
        }
        
        return JSON.stringify(obj);
    }  
}