var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000
app.get("/", function (req, res) {
    res.send("My First APi");
});

app.listen(PORT, function () {
    console.log("Application is Up under " + PORT + " port");
})
