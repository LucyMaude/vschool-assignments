//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
//for each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.
var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.
//code here
var nums = [13, 19, 27, 35, 2];

function oddsAndEvens() {
    for (var i = 0; i < 101; i++) {
        if (i % 2 === 0) {
            evens.push(i);
        } else {
            odds.push(i);
        }
    }
}

oddsAndEvens();
console.log(evens);
console.log(odds);
