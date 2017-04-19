var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var haikuSchema = new Schema({
    title: String,
    firstLine: String,
    secondLine: String,
    thirdLine: String,
//    gg
    tags: [String]
});

module.exports = mongoose.model("Haiku", haikuSchema);
