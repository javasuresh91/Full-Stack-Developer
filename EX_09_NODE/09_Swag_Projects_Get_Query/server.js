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

//Inserting Record to My Sql DB

app.post("/addProduct", (req, res) => {

    var value = [[req.body.text, req.body.price]];
    db.query("INSERT INTO PRODUCT(title, price) VALUES ?", [value], (err, result) => {
        if (err) {
            console.log("Error While inserting " + err);
            res.status(500).send("Eorrr");
        }

        console.log("Inserted :::::: " + result);
        res.send("Product Added");
    });

});

app.get("/getProduct", (req, res) => {

    db.query("SELECT * FROM PRODUCT", (err, result, fields) => {
        res.send(result);
    });

});


app.listen(PORT, () => {
    console.log("Application is running :::::::: " + PORT);
});
