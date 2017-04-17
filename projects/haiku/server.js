var express = require("express");
var app = express();

var userRoute = require("./routes/user-route")

var path = require("path");
app.use(express.static("public"));

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/haiku");

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(8080, function(){
    console.log("app is listening on 8080")
})

