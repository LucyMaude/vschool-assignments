var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var port = 3000;


var fruit = [
    {
        type: "apple",
        color: "green"
    },
    {
        type: "banana",
        color: "green"
    },
    {
        type: "apple",
        color: "red"
    },
    {
        type: "banana",
        color: "yellow"
    },
    {
        type: "banana",
        color: "orange"
    }
];

app.get("/fruit", function (req, res) {

    console.log(req.query);
    foundItems = [];
    for (var i = 0; i < fruit.length; i++) {

        var haveFoundExact = true;
        
        for (var key in req.query) {
            
            if (req.query[key] != fruit[i][key]) {
                haveFoundExact = false;
            }
        }
        if (haveFoundExact) {
            foundItems.push(fruit[i])
        }
    }
    res.send(foundItems)
})

app.listen(port, function () {
    console.log("App is listening on port 3000!");
});
