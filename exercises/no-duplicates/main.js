var testString = "supercool";
var original = [];
var double = [];

function isDuple(val) {
    for (var i = 0; i < val.length; i++) {
        if (original.indexOf(val[i]) === -1) {
            original.push(val[i]);
        } else {
            double.push(val[i]);
        }
    }
}