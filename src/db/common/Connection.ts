//TODO https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/
import { Entry } from 'pluto-rd';
import { Keyword } from 'pluto-rd';
import * as Promise from 'bluebird';

export interface Connection {
    countEntriesWithKeyword(handle: string): Promise<number>;
    findEntriesWithKeywordLimited(handle, offset, count): Promise<Entry[]>;
    findAllKeywords(): Promise<Keyword[]>;
    countAllEntries(): Promise<number>; 
}