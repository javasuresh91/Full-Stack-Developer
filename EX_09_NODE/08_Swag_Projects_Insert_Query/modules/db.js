//Database Setup
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'mysql',
    password: 'mysql',
    database: 'nodejs_demo'
});

//var mysqldbConnect = connection.connect();
//https: //hackernoon.com/setting-up-node-js-with-a-database-part-1-3f2461bdd77f
module.exports = connection;
