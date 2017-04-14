var express = require("express");
var uuid = require("uuid/v4");
var bodyParser = require("body-parser");

var port = 9000;
var app = express();

app.use(bodyParser.json());
var todoArr = [
    {
        "name": "First Item",
        "description": "The description of the first item",
        "imageUrl": "https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2011/05/gfp-banner-bullies-slide-1600x730.jpg",
        "completed": false,
        "_id": 1
},
    {
        "name": "Second",
        "description": "The description of the second item",
        "imageUrl": "https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2011/05/gfp-banner-bullies-slide-1600x730.jpg",
        "completed": false,
        "_id": 2
},
    {
        "name": "Third Item",
        "description": "The description of the third item",
        "imageUrl": "https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2011/05/gfp-banner-bullies-slide-1600x730.jpg",
        "completed": false,
        "_id": 3
},
    {
        "name": "Fourth Item",
        "description": "The description of the fourth item",
        "imageUrl": "https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2011/05/gfp-banner-bullies-slide-1600x730.jpg",
        "completed": false,
        "_id": 4
}
];

app.get("/todos", function (req, res) {

    if (req.query) {
//        console.log(req.query);
        foundItems = [];

        for (var i = 0; i < todoArr.length; i++) {

            var haveFoundExact = true;

            for (var key in req.query) {

                if (req.query[key] != todoArr[i][key]) {
                    haveFoundExact = false;
                }
            }
            if (haveFoundExact) {
                foundItems.push(todoArr[i])
            }
        }
        res.send(foundItems)
    } else {
        res.send(todoArr);
        console.log("Get It!");
    }

});

app.post("/todos", function (req, res) {
    var singleTodo = req.body;
    singleTodo._id = uuid();
    todoArr.push(singleTodo);
    res.send(todoArr);
});

app.delete("/todos/:_id", function (req, res) {
    var toDelete = req.params._id;
    for (var i = 0; i < todoArr.length; i++) {
        if (toDelete === todoArr[i]._id) {
            res.send(todoArr.splice(i, 1));
        }
    }
});

app.put("/todos/:_id", function (req, res) {
    var toChange = req.body;
    console.log(toChange);
    for (var i = 0; i < todoArr.length; i++) {
        if (toChange._id === todoArr[i]._id) {
            console.log(todoArr[i]._id)
            for (var key in toChange) {
                if (todoArr[i][key] !== toChange[key]) {
                    todoArr[i][key] = toChange[key];
                }
            }
            res.send(todoArr[i]);
        } else {
            console.log("cannot put");
        }
    }
});


app.listen(port, function () {
    console.log("listening level over " + port);
})
