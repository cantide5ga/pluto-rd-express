//TODO https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/
import { Entry } from 'pluto-rd';
import { Keyword } from 'pluto-rd';

export interface Connection {
    countEntriesWithKeyword(handle: string): number;
    findEntriesWithKeywordLimited(handle, offset, count): Entry[];
    findAllKeywords(): Keyword[];
    countAllEntries(): number; 
}