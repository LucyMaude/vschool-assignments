var mongoose = require("mongoose");
var express = require("express");
var userRoute = express.Router();
var User = require("../models/user-schema");

userRoute

.get("/", function(req, res){
    User.find(req.query, function(err, user){
        res.send(user);
    })
})

.post("/", function(req, res){
    newUser = new User(req.body);
    User.save(function(err, new_User){
        res.send(new_User);
    })
})

.delete("/:id", function(req, res){
    User.findByIdAndRemove(req.params.id, function(err, removed){
        res.send(removed)
    })
})

.put("/", function(req, res){
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, changed){
        res.send(changed);
    })
})

module.exports = userRoute;