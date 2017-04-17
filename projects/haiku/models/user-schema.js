var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema ({
    firstName: String,
    lastName: String,
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    haikuPlural: [{
        title: String,
        haiku: String
    }],
});

module.exports = mongoose.model("User", userSchema);