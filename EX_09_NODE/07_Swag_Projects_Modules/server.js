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


//Database Setup - Module

var db = require('./modules/db');

//Variable Module 

var product = require('./modules/product');


app.listen(PORT, () => {
    console.log("Application is running :::::::: " + PORT);
});
