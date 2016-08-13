import { Request } from 'express';
import { EntryService } from './EntryService';
import { EntryRequest } from './EntryRequest';

export class EntryResource {
    private delegate: EntryService;
    
    constructor() {
        this.delegate = new EntryService();
    }
    
    public getEntries(request: Request): string {
        const req = <EntryRequest>request.query;
        
        const entries = this.delegate
                        .getEntries(req.keyword, req.offset, req.count); 
        return JSON.stringify(entries);
    }
}