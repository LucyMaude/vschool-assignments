var lucy = "lucy";
var test = "test value 2"
var testArray = [1, 2, 3, 4, 5, 42, 5, 10, 6, 12, 13, 14]

function printValue(val) {
    for (var i = 0; i < val.length; i++) {
        console.log(val[i]);
    }
}

function isHere(val, a) {
    for (var i = 0; i < val.length; i++) {
        if (val[i] === a) {
            console.log(val.indexOf(a));
        } else {
            console.log(a + " is not found, silly!");
        }
    }
}

function isFortyTwo(val) {
    for (i = 0; i <= val.length; i++) {
        if (val[i] === 42) {
            return;
        } else {
            console.log("It is not found yet!");
        }
    }
}

//Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten.

var testArray = [20, 2, 3, 4, 5, 42, 5, 10, 6, 12, 13, 14]

function isSmallest(val) {
    var smallest = val[0];
    for (var i = 0; i <= val.length; i++) {
        if (val[i] < smallest) {
            var smallest = val[i];
        } 
        if (i === val[9]) {
            return smallest;
        }
    }
}