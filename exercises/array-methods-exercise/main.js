var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log("vegetables: ", vegetables);

fruit.shift();
console.log("fruit: ", fruit);

fruit.push(fruit.indexOf("orange"));
console.log("fruit: ", fruit);

var veggieLength = vegetables.length;
vegetables.push(veggieLength);
console.log("vegetables: ", vegetables);

var food = fruit.concat(vegetables);
console.log("food: ", food);

food.splice(4, 2);
console.log("food: ", food);

food.reverse();
console.log("food: ", food);

food.toString();