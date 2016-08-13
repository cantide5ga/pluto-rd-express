// import { selectEntries, selectKeywords, countEntries } from './Static';

//https://www.npmjs.com/package/mysql
const mysql = require('mysql2');

export const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret'
});

// export let connection = {
//     query: Function()
// };

// connection.query = (...qry: any[]): any => {
//     if(!qry.length)
//         return selectKeywords();
//     else if (typeof qry[0] === "number")
//         return countEntries();
//     else
//         return selectEntries(qry);
// }

// CREATE DATABASE myDB
// CREATE DATABASE IF NOT EXISTS DBName