var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config"); 
var expressJwt = require("express-jwt");

var port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/todo", require("./routes/todoRoutes"));
app.use("/api", expressJwt({secret: config.secret}));

app.use(express.static(path.join(__dirname, "public-practice")));

mongoose.connect(config.database);

app.use("/auth", require("./routes/authRoutes"));
app.use("/api/todo", require("./routes/todoRoutes"));

app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});
