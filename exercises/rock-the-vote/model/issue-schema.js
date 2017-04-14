var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var issueSchema = new Schema({
    title: String,
    description: String,
    votes: Number,
    comments: [{username: String, comment: String}]

})


var Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;
