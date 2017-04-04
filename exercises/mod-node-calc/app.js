var readline = require("readline-sync");

var addition = require("./add");
var Subtraction = require("./subtract");
var multiplication = require("./multiply");
var division = require("./divide");
var exponent = require("./raise");


var one = readline.question("Please type a number: "); 
var two = readline.question("Please type another number: "); 
var three = readline.question("Please type add, subtract, multiply, divide, or exponent"); 

var minus = new Subtraction(one, two);
pickMe(one, two, three);


function pickMe (one, two, three) {
    if (three === "add") {
        console.log(addition(one, two));
    } else if (three === "subtract") {
        console.log(minus.subtract(one, two));
    } else if (three === "multiply") {
        console.log(multiplication.multiply(one, two));
    } else if (three === "divide") {
        console.log(division(one, two));
    } else if (three === "exponent") {
        console.log(exponent(one, two));
    }
}
