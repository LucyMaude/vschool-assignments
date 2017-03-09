var readlineSync = require("readline-sync");
var operations = ["Add", "Subtract", "Multiply", "Divide"];

var firstOption = readlineSync.question("Please enter your first number!");
var firstVal = parseFloat(firstOption);
var secondOption = readlineSync.question("Please enter your second number!");
var secondVal = parseFloat(secondOption);

var giveOptions = readlineSync.keyInSelect(operations, "Please select an operation to perform");

if (giveOptions === 0) {
    addition(firstVal, secondVal);
} else
if (giveOptions === 1) {
    subtraction(firstVal, secondVal);
} else if (giveOptions === 2) {
    multiplication(firstVal, secondVal);
} else if (giveOptions === 3) {
    division(firstVal, secondVal);
} 

function addition(firstVal, secondVal) {
    var algo = firstVal + secondVal;
    console.log("The result is: " + parseFloat(algo));
}

function subtraction() {
    var algo = firstVal - secondVal;
    console.log("The result is: " + parseFloat(algo));
}

function multiplication() {
    var algo = firstVal * secondVal;
    console.log("The result is: " + parseFloat(algo));
}

function division() {
    var algo = firstVal / secondVal;
    console.log("The result is: " + parseFloat(algo));
}