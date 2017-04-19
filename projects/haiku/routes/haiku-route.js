var express = require("express");
var haikuRouter = express.Router();
var Haiku = require("../model/haiku-schema");

haikuRouter.route("/")

.get(function(req, res){
    Haiku.find({}, function(err, results){
        if (err) console.log(err);
        res.send(results);
    })
})

.post(function (req, res) {
    var haiku = new Haiku(req.body);
//    haiku.user = req.user;
    haiku.save(function (err, newTodo) {
        if (err) res.status(500).send(err);
        res.status(201).send(newTodo);
    });
})

haikuRouter.route("/:haikuId")

.get(function(req, res){
    Haiku.findOne({_id: req.params.haikuId}, function(err, results){
        res.send(results);
    })
})

.delete(function(req, res){
    Haiku.findOneAndRemove({_id: req.params.haikuId}, function(err, removed){
        res.send(removed)
    })
})

.put(function(req, res){
    Haiku.findOneAndUpdate({_id: req.params.haikuId}, req.body, {new: true}, function(err, changed){
        res.send(changed);
    })
})



module.exports = haikuRouter;