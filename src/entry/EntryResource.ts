import { Request } from 'express';
import { EntryService } from './EntryService';
import { Entry } from 'pluto-rd';
import * as Promise from 'bluebird';
import { ApiResponse } from '../common/ApiResponse';
import { Resource } from '../common/Resource';

export class EntryResource extends Resource {
    private delegate: EntryService;
    
    constructor(request: Request) {
        super(request);
        this.delegate = new EntryService();
    }
    
    public getEntries(): Promise<ApiResponse> {
        const param = this
            .queryParams<{keyword: string, offset: number, count: number}>();

        return this.delegate
        .getEntries(param.keyword, param.offset, param.count)
        .then(entries => {
            return ApiResponse.OK(entries);    
        })
    }
    
    public postEntry(): Promise<ApiResponse> {
        const data = this.bodyParams<Entry>();
        
        return this.delegate
        .addEntry(data)
        .then(() => {
            return ApiResponse.CREATED();        
        });
    }
}