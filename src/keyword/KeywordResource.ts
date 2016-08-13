import { Request } from 'express';
import { KeywordService } from './KeywordService';
import { KeywordResponse } from './KeywordResponse';
import * as Promise from 'bluebird';

export class KeywordResource {
    private delegate: KeywordService;
    
    constructor() {
        this.delegate = new KeywordService();
    }
    
    public getResponse(): Promise<string> {
        return Promise.join(
            this.delegate.getKeywords(),
            this.delegate.getEntryCount(),
            (keywords, entryCount) => {
                const obj: KeywordResponse = {
                    keywords: keywords,
                    entryCount: entryCount
                }
                return JSON.stringify(obj);
            }
        )
        
        
    }  
}