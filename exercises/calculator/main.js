function addNumber() {
    var userAddOne = document.getElementById("addingOne");
    console.log(userAddOne);
    var userAddTwo = document.getElementById("addingTwo");
    console.log(userAddTwo);
    var sumOf = Number(userAddOne.value) + Number(userAddTwo.value);
    console.log(sumOf);
    document.getElementById("textSum").innerHTML = "The sum of these numbers is " + sumOf;
}

function subtractNumber() {
    var userSubtractOne = document.getElementById("subtractingOne");
    var userSubtractTwo = document.getElementById("subtractingTwo");
    var less = userSubtractOne.value - userSubtractTwo.value;
    document.getElementById("textLess").innerHTML = "The difference of these numbers is " + less;
}

function multiplyNumber() {
    var userMultiplyOne = document.getElementById("multiplyingOne");
    var userMultiplyTwo = document.getElementById("multiplyingTwo");
    var product = userMultiplyOne.value * userMultiplyTwo.value;
    document.getElementById("textTimes").innerHTML = "The product of these numbers is " + product;
}