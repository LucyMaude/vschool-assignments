var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");  
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config"); 
var expressJwt = require("express-jwt");

var port = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(bodyParser.json()); 
app.use("/api", expressJwt({secret: config.secret}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/haiku", require("./routes/haiku-route"));

mongoose.connect(config.database, function (err) {
    if (err) throw err;
    console.log("connected to the DB");
});

app.use("/auth", require("./routes/authRoutes"));

app.listen(port, function(){
    console.log(`app is listening on ${port}`)
});


 







