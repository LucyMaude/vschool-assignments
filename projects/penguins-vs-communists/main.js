function Parties(name, population) {
    this.name = name;
    this.population = population;
}

var pinguinos = new Parties("Penguins", 1000000);
var communistos = new Parties("Communists", 1000000);
var party;
var enemy;
var switcher;

function randomMath(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function flipCoin() {
    var resultFlip = randomMath(0, 2);
    if (resultFlip === 0) {
        enemy = pinguinos;
        party = communistos;
    } else if (resultFlip === 1) {
        party = communistos;
        enemy = pinguinos;
    }
}

function change() {
    switcher = party;
    party = enemy;
    enemy = switcher;
}

function onHit() {
    var damageAmount = randomMath(20000, 1000000);
    party.population -= damageAmount;
    console.log("The " + enemy.name + "'s missile has hit The " + party.name + " and their population is decreased to " + party.population);
}

function onMiss() {
    console.log("The " + enemy.name + "'s missile has landed out to sea and missed The " + party.name + " completely!");
}

function sendNuke(party, onHit, onMiss) {
    while (pinguinos.population > 0 && communistos.population > 0) {
        var hitOrMiss = randomMath(0, 2);
        if (hitOrMiss === 1) {
            onHit();
        } else if (hitOrMiss === 2) {
            onMiss();
        }
        change();
    }
}

flipCoin();
sendNuke(party, onHit, onMiss);