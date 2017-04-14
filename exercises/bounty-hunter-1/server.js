var express = require('express');
var bodyParser = require("body-parser");
var uuid = require("uuid/v4");

var port = 3000;
var app = express();


var path = require("path");
app.use(express.static("public"));
app.use(bodyParser.json());

var bounties = [
    {
        "firstName": "Luke",
        "lastName": "Earthshambler",
        "living": false,
        "bountyAmount": 1000000,
        "type": "Jedi"
}
];

app.get("/bounties", function (req, res) {
    res.send(bounties);
});

app.listen(port, function () {
    console.log("this is working yay!")
});

app.post("/bounties/:_id", function (req, res) {
    var bounty = req.body;
    bounty._id = uuid();
    bounties.push(bounty);
    res.send(bounties);
})

app.delete("/bounties/:_id", function (req, res) {
    var toDelete = req.params._id;
    for (var i = 0; i < bounties.length; i++) {
        if (toDelete === bounties[i]._id) {
            res.send(bounties.splice(i, 1));
        }
    }
})

app.put("/bounties/:_id", function (req, res) {
    var recreate = req.body;
    for (var i = 0; i < bounties.length; i++) {
        if (recreate._id === bounties[i]._id) {
            for (var key in recreate) {
                if (bounties[i][key] !== recreate[key]) {
                    bounties[i][key] = recreate[key];
                    console.log(bounties[i][key])
                }
            }
            res.send(bounties[i]);
        } else {
            console.log("Not Working");
        }
    }
})
