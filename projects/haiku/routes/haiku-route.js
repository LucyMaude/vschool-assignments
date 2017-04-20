var express = require("express");
var haikuRouter = express.Router();
var Haiku = require("../model/haiku-schema");

haikuRouter.route("/")

.get(function(req, res){
    Haiku.find({user: req.user._id}, function(err, results){
        if (err) res.status(500).send(err);
        res.send(results);
    });
})

.post(function (req, res) {
    var haiku = new Haiku(req.body);
    haiku.user = req.user;
    haiku.save(function (err, newHaiku) {
        if (err) res.status(500).send(err);
        res.status(201).send(newHaiku);
    });
})

haikuRouter.route("/:haikuId")

.get(function(req, res){
    Haiku.findOne({_id: req.params.haikuId, user: req.user._id}, function(err, results){
        if (err) res.status(500).send(err);
        if (!results) res.status(404).send("No haiku found");
        else res.send(results);
    });
})

.delete(function(req, res){
    Haiku.findOneAndRemove({_id: req.params.haikuId, user: req.user._id}, function(err, removed){
        res.send(removed)
    })
})

.put(function(req, res){
    Haiku.findOneAndUpdate({_id: req.params.haikuId, user: req.user._id}, function(err, changed){
        if (err) res.status(500).send(err);
        res.send(changed);
    })
})



module.exports = haikuRouter;