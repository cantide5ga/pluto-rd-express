import { Request } from 'express';
import { KeywordService } from './KeywordService';
import { KeywordResponse } from './KeywordResponse';
import * as Promise from 'bluebird';
import { Resource } from '../common/Resource';
import { ApiResponse } from '../common/ApiResponse';

export class KeywordResource extends Resource {
    private delegate: KeywordService;
    
    constructor(request: Request) {
        super(request);
        this.delegate = new KeywordService();
    }
    
    public getKeywords(): Promise<ApiResponse> {
        return Promise.join(
            this.delegate.getKeywords(),
            this.delegate.getEntryCount(),
            (keywords, entryCount) => {
                const obj: KeywordResponse = {
                    keywords: keywords,
                    entryCount: entryCount
                }
                return ApiResponse.OK(obj);
            }
        )
    }
}