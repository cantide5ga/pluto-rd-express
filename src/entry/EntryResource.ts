import { Request } from 'express';
import { EntryService } from './EntryService';
import { EntryRequest } from './EntryRequest';
import * as Promise from 'bluebird';

export class EntryResource {
    private delegate: EntryService;
    
    constructor() {
        this.delegate = new EntryService();
    }
    
    public getEntries(request: Request): Promise<string> {
        const req = <EntryRequest>request.query;
        
        return this.delegate
        .getEntries(req.keyword, req.offset, req.count)
        .then(entries => {
            return JSON.stringify(entries);    
        });
    }
}