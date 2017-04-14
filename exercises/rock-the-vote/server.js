var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var issueRoute = require("./routes/issue-route");
var mongoose = require("mongoose");

var path = require("path");
app.use(morgan("dev"));
app.use(express.static("public"));

app.use(bodyParser.json()); 

mongoose.connect("mongodb://localhost/rocking-vote", function (err) {
    if (err) throw err;
    console.log("Connected to the DB")
});

app.use("/rocking-vote", function(req, res, next) {
    console.log(req.body);
    next();
}, issueRoute);

app.listen(8080, function () {
    console.log("App levels over 8080");
});
