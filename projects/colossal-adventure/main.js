//A Fun Message Greets the Player
var readlineSync = require("readline-sync");

//The Console asks for players name and stores name
var playerName = readlineSync.question("Hello there! Welcome to this game! What is your name?")
console.log("Your name is " + playerName);


//The Console asks player to hit "w" to walk
var beginOptions = ["w", "s"]

var goWalkAbout = readlineSync.keyIn("You need to choose to walk or sit and wait for help", {
    limit: "ws"
});

//When player walks, algorithm runs to determine if enemy appears (1/3 or 1/4 chance)

if (goWalkAbout === "w") {
    firstEncounter();
} else if (goWalkAbout === "s") {
    prematureDeath();
}

function prematureDeath() {
    console.log("You sit down and begin to cry. Your tears attract moisture seeking vipers who attack you and you die. ---END---")
}

function firstEncounter() {
    var min = Math.ceil(0);
    var max = Math.floor(3);
    var isEnemy = Math.floor(Math.random() * (max - min)) + min;
    if (isEnemy > 0) {
        continuesWalking();
    } else if (isEnemy === 0) {
        generateEnemy();
    }
}

function continuesWalking() {
    var keepWalking = readlineSync.keyIn("Keep walking, please", {
        limit: "ws"
    });
    if (keepWalking === "w") {
        firstEncounter();
    } else if (keepWalking === "s") {
        prematureDeath();
    }
}

//When Enemy appears, it appears at random! Their hitpoints are random but their health is set. 
//1. generates Enemy

function generateEnemy() {
    function Enemy(type, hitPoints, defense) {
        this.type = type;
        this.hitPoints = hitPoints;
        this.defense = defense;
    }

    var type = function () {
        var pickEnemy = Math.random();
        if (pickEnemy < .1) {
            return ("Edward Cullen");
        } else if (pickEnemy < .3 && pickEnemy >= .1) {
            return ("Chi-Chi");
        } else if (pickEnemy < .6 && pickEnemy >= .3) {
            return ("Lord Voldemort");
        } else if (pickEnemy < .9 && pickEnemy >= .6) {
            return ("Miley Cyrus");
        } else if (pickEnemy >= .9) {
            return ("Harambe");
        }
    };
    //        console.log(type());
    var enemyType = type();

    var hitPoints = function (type) {
        if (type === "Edward Cullen") {
            var min = Math.ceil(5);
            var max = Math.floor(20);
            return Math.floor(Math.random() * (max - min)) + min;
        } else if (type === "Chi-Chi") {
            var min = Math.ceil(20);
            var max = Math.floor(50);
            return Math.floor(Math.random() * (max - min)) + min;
        } else if (type === "Lord Voldemort") {
            var min = Math.ceil(50);
            var max = Math.floor(80);
            return Math.floor(Math.random() * (max - min)) + min;
        } else if (type === "Miley Cyrus") {
            var min = Math.ceil(80);
            var max = Math.floor(100);
            return Math.floor(Math.random() * (max - min)) + min;
        } else if (type === "Harambe") {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            return Math.floor(Math.random() * (max - min)) + min;
        };
    }

    var hitPointValue = hitPoints(enemyType);
    //        console.log(hitPointValue);

    var defense = function (enemyType) {
        if (enemyType === "Edward Cullen") {
            return 10;
        } else if (enemyType === "Chi-Chi") {
            return 30;
        } else if (enemyType === "Lord Voldemort") {
            return 70;
        } else if (enemyType === "Miley Cyrus") {
            return 100;
        } else if (enemyType === "Harambe") {
            return 0;
        }
    };

    var defenseValue = defense(enemyType);
    //        console.log(defenseValue);

    var enemy = new Enemy(enemyType, hitPointValue, defenseValue);

    console.log(enemy);

}


//2. Console tells User about it ("A wild __ has appeared! Description of __! Run or Fight")

var runOrFight = ["Run like a Man", "Fight like a Lady"];
var whatYouDo = readlineSync.keyInSelect(runOrFight, "Run or Fight? Only you can choose your destiny!");



//When User enters "Print" console will print name, HP, and Inventory