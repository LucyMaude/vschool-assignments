var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var haikuSchema = new Schema({
    title: String,
    firstLine: String,
    secondLine: String,
    thirdLine: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    tags: [String]
});

module.exports = mongoose.model("Haiku", haikuSchema);
