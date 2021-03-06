var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;
var bodyParser = require('body-parser');

//This is middle-ware , which our application going to use.
//So we are saying to our application use this at the required situation
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var ingredients = [
    {
        "id": "1",
        "item": "eggs"
    },
    {
        "id": "2",
        "item": "Cashew"
    },
    {
        "id": "3",
        "item": "Nuts"
    },
    {
        "id": "4",
        "item": "Oils"
    },
    {
        "id": "5",
        "item": "Green Leaves"
    }
];

app.get("/", function (req, res) {
    res.send("My First APi");
});

app.get("/getIngredients", function (req, res) {
    res.send(ingredients);
});
app.post("/putIngredients", function (req, res) {
    var ingredient = req.body;
    if (!ingredient || ingredient.item === "") {
        res.status(500).send("Body not found");
    } else {
        ingredients.push(ingredient);
        res.status(202).send("ingredient Added");
    }
});

app.listen(PORT, function () {
    console.log("Application is Up under " + PORT + " port");
})
