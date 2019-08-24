//Basic Express Application Setup

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


//Database Setup

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'mysql',
    password: 'mysql',
    database: 'nodejs_demo'
});

var mysqldbConnect = connection.connect();


app.listen(PORT, () => {
    console.log("Application is running :::::::: " + PORT);
});
