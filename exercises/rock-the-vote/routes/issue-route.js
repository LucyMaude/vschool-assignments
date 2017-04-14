var express = require("express");
var issueRoute = express.Router();
var Issue = require("../model/issue-schema");

issueRoute

.get("/", function(req, res){
    Issue.find(req.query, function(err, variedIssues){
        res.send(variedIssues);
    })
})

.post("/", function(req, res){
    console.log(req.body);
    newIssue = new Issue(req.body);
    newIssue.save(function(err, addedIssue){
        res.send(addedIssue)
    })
})

.delete("/:id", function(req, res){
    Issue.findByIdAndRemove(req.params.id, function(err, removeIssue){
        res.send(removeIssue);
    })
})


.put("/:id", function(req, res){
    console.log(req.body);
    Issue.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, changedIssue){
        res.send(changedIssue);
    })
})

module.exports = issueRoute;
