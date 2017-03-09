//For each step of the exercise, alternate between the two different types of function declarations when you are defining your functions.
//
//Write a function that accepts two numbers as parameters, and returns the sum.
//
function addNumbers (a, b) {
    return(a + b);
}
addNumbers(2, 5);

//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
//
var addThree =function (a, b, d) {
    if (a >= b && a >= d) {
        return a;
    } else if (b >= a && b >= d){
        return b;
    } else {
        return d;
    }
}

addThree(9, 9, 1);

//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
//
function isEven (a){
    if (a % 2 === 0){
        return "even!";
    } else {
        return "odd!";
    }
}

isEven(10); 

//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
//

var isTwenty = function (string) {
    var size = string.length / 2
    if (string.length <= 20){
        return (string.concat(string));
    } else {
        var newString = string.slice(0, size);
        return(newString);
    }
}

//Optional Challenge
//Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
//


//Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)
//


//Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.
//
