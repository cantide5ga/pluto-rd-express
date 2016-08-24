import * as config from 'config';

const middleware = config.get<string>('db.middleware')

export const EntryDao = require(middleware).EntryDao;
export const KeywordDao = require(middleware).KeywordDao;