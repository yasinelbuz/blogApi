const mysql = require('mysql');

exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'blogApi',
});
