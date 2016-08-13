export class Statement {
    static countEntriesWithKeywordStmt = 'SELECT COUNT(*) FROM Keyword WHERE Handle = ?;';
    static findEntriesWithKeywordLimitedStmt = 'SELECT * FROM Keyword WHERE Handle = ? LIMIT ?,?';
    static findAllKeywordsStmt = 'SELECT * FROM Keyword';
    static countAllEntriesStmt = 'SELECT COUNT(*) FROM Entry';
}