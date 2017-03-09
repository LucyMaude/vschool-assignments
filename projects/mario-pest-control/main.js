var goombasCost = 5;
var bobOmbsCost = 7;
var cheepCheepsCost = 11;

var goombasTotal = goombasCost * goombasCaught;
var bobsTotal = bobOmbsCost * bobsCaught;
var cheepTotal = cheepCheepsCost * cheepsCaught;

function createGoombaTotal() {
    var goombasCaught = document.getElementById("goombasCaught").value;
    document.getElementById("addGoombaText").innerHTML = goombasCost * goombasCaught + " Coins";
}

function createBobTotal() {
    var bobsCaught = document.getElementById("bobsCaught").value;
    document.getElementById("addBobText").innerHTML = bobOmbsCost * bobsCaught + " Coins";
}

function createCheepTotal() {
    var cheepsCaught = document.getElementById("cheepsCaught").value;
    document.getElementById("addCheepText").innerHTML = cheepCheepsCost * cheepsCaught + " Coins";
}

function createTotalCost() {
    var goombasCaught = document.getElementById("goombasCaught").value;
    var bobsCaught = document.getElementById("bobsCaught").value;
    var cheepsCaught = document.getElementById("cheepsCaught").value;
    
    console.log(goombasCaught);
    
    var goombasTotal = goombasCaught * goombasCost;
    var bobsTotal = bobOmbsCost * bobsCaught;
    var cheepTotal = cheepCheepsCost * cheepsCaught;
    
    console.log(goombasTotal);
    
    var totalCost = goombasTotal + bobsTotal + cheepTotal;
    
    console.log(totalCost);
    
    document.getElementById("addTotalText").innerHTML = totalCost + " Coins"
}