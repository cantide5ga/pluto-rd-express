import * as Promise from 'bluebird';
import { EntryResult, Entry, Keyword } from 'pluto-rd';

declare namespace PlutoRdExpress {
    interface IEntryDao<E extends Entry, K extends Keyword> {   
        findWithKeywordLimited(keyword: string, offset: number, count: number): Promise<EntryResult>;
    
        count(): Promise<number>;
    
        createWithKeywords(entry: E, persisted: K[]): Promise<number>;  
    }
    
    interface IKeywordDao<K extends Keyword> {
        createIfNotExists(keywords: K[]): Promise<number>;
        
        findAll(): Promise<K[]>;
        
        findKeywordsByHandles(handles: string[]): Promise<K[]>;
        
        updateCounts(keywords: K[]): Promise<number[]>;
    }
}

export = PlutoRdExpress;
