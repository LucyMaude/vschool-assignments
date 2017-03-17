var readlineSync = require("readline-sync");

var userHealth = 100;
var itsAlive = [];
var enemigos = [
    {
        name: "Edward Cullen",
        power: "the power of undying love",
        hitPoints: randomMath(5, 20),
        defense: 10,
        stash: {
            itemType: "cassette player with a name-tag sticker reading: Star Lord",
            damagePower: randomMath(30, 50),
            coolPhrase: "A roll of thunder, a puff of smoke, and Chris Pratt appears! He waltzes up to your enemy and flicks them in the head dealing ",
        },
        },
    {
        name: "Chi-Chi",
        power: "the power of the CHANCLA",
        hitPoints: randomMath(20, 50),
        defense: 30,
        stash: {
            itemType: "old mother scobe",
            damagePower: randomMath(20, 65),
            coolPhrase: "You toss the stenching scobe into your enemies face. The scent of vinegar and the subsequent feeling of inferiority deal your enemy ",
        },
        },
    {
        name: "Lord Voldemort",
        power: "a powerful curse",
        hitPoints: randomMath(50, 80),
        defense: 70,
        stash: {
            itemType: "The Elder Wand",
            damagePower: randomMath(20, 65),
            coolPhrase: "You lift the wand high channeling your inner Longbottom and yell 'CRUCIO'. Green sparks shoot out of the wand and your enemy writhes in pain. They take ",
        },
},
    {
        name: "Miley Cyrus",
        power: "a wrecking ball",
        hitPoints: randomMath(80, 100),
        defense: 100,
        stash: {
            itemType: "toxic aquaintance",
            damagePower: randomMath(10, 100),
            coolPhrase: "You remove the duct-tape from your toxic aquaintance's mouth and cover your ears to protect yourself from their passive aggressive insults. Your enemy is filled with rage at your frenemy's hipocrissy and the pointless drama they are creating. Your enemy deals themself "
        },
},
    {
        name: "The Ghost of Harambes Past",
        power: "the impact of his untimely death",
        hitPoints: randomMath(1, 5),
        defense: 0,
        stash: {
            itemType: "Banana",
            damagePower: randomMath(20, 80),
            coolPhrase: "You peel a banana, eat it and it gives you brute monkey strength! You drag your enemy a mile down the road and inflict "
        },
},
        ];
var enemyDefense = [];
var inventory = [
    {
        itemType: "vape pen with a power button and another mystery button",
        damagePower: randomMath(50, 65),
        coolPhrase: "You push the mystery button on your vape pen and a tiny grenade pops out of the mouthpiece. You activate the grenade and throw it at your enemy dealing ",
                 },
];
var inventoryNames = [inventory[0].itemType, ];
var theGame = true;
var options = ["Run like a Man", "Fight like a Lady"];
var playerName;

function prematureDeath() {
    console.log("You sit down and begin to cry. Your tears attract moisture seeking vipers who attack you and you die. ---END---");
    endGame();
}

function endGame() {
    return false;
}

function introduction() {
    playerName = readlineSync.question("You wake to find yourself lying a strange land. Before you stands a grungy looking hipster. He notices that you have awoken and reaches out his hand. 'Yo, take these! Quick, before they come back!' You reach out and take whatever is in his hand. Inspecting them you find a vape pen and a sharpie. The vape pen has two buttons on it and a sticky name-tag that reads 'Hello my name is: ' and a list of three names underneath each crossed out with a big X. 'What is this...' you begin to ask the hipster, but he has disappeared. On a whim, you decide to add your name to the list on the vape pen...");

    console.log("Hello my name is " + playerName);

    console.log("You look around and see a large mountain about a days journey from where you are.");

}

function randomMath(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function userWalks() {
    var beginOptions = ["w", "s", "p"]
    var wander = readlineSync.keyIn("You need to choose [w] to walk to the mountain, [s] sit and wait for help, or [p] to view your user information", {
        limit: "wsp"
    });

    if (wander === "w") {
        firstEncounter();
    } else if (wander === "s") {
        prematureDeath();
    } else if (wander === "p") {
        console.log(playerName);
        console.log(userHealth);
        console.log(inventoryNames);
    }

}

function firstEncounter() {
    var min = Math.ceil(0);
    var max = Math.floor(3);
    var isEnemy = Math.floor(Math.random() * (max - min)) + min;
    if (isEnemy > 0) {
        continuesWalking();
    } else if (isEnemy === 0) {
        isFighting();
    }
}

function continuesWalking() {
    itsAlive = [];
    var keepWalking = readlineSync.keyIn("Keep walking, please", {
        limit: "wsp"
    });
    if (keepWalking === "w") {
        firstEncounter();
    } else if (keepWalking === "s") {
        prematureDeath();
    } else if (wander === "p") {
        console.log(playerName);
        console.log(userHealth);
        console.log(inventoryNames);
    }
}

function isFighting() {

    var pickEnemy = randomMath(0, 5);

    if (pickEnemy === 0) {
        itsAlive.push(enemigos[0]);
    } else if (pickEnemy === 1) {
        itsAlive.push(enemigos[1]);
    } else if (pickEnemy === 2) {
        itsAlive.push(enemigos[2]);
    } else if (pickEnemy === 3) {
        itsAlive.push(enemigos[3]);
    } else if (pickEnemy === 4) {
        itsAlive.push(enemigos[4]);
    } else if (pickEnemy === 5) {
        itsAlive.push(enemigos[5]);
    }
    var enemyDefense = itsAlive[0].defense;
    console.log(itsAlive[0].name + " has appeared in your path!");
    var options = ["Run like a Man", "Fight like a Lady"];
    var whatYouDo = readlineSync.keyInSelect(options, "Run or Fight? Only you can choose your destiny!");

    if (whatYouDo === 0) {
        isEscape();
    } else if (whatYouDo === 1) {
        keepFighting();
    }
}

function isEscape() {
    var didRun = randomMath(1, 3);
    if (didRun === 1) {
        console.log("Congratulations you have escaped! Let's keep walking, shall we?");

        continuesWalking();
    } else if (didRun > 1) {
        console.log("Uhoh! You weren't able to outrun them!");
        beAttacked();
        if (userHealth < 0) {
            console.log("This is where you die");
            return false;
        } else {
            console.log("You are injured but manage to escape as your enemy runs away!")
            continuesWalking();

        }
    }
}

function keepFighting() {
    doFighting();

}

function doFighting() {
    var pickMe = readlineSync.keyInSelect(inventoryNames, "Choose your weapon!");
    var randomStash = [];
    if (pickMe === 0) {
        randomStash.push(inventory[0]);
    } else if (pickMe === 1) {
        randomStash.push(inventory[1]);
    } else if (pickMe === 2) {
        randomStash.push(inventory[2]);
    } else if (pickMe === 3) {
        randomStash.push(inventory[3]);
    } else if (pickMe === 4) {
        randomStash.push(inventory[4]);
    }
    console.log("You rummage through your satchel and grab your weapon of choice! Brandishing your " + randomStash[0].itemType + " and advance on your enemy. " + randomStash[0].coolPhrase + randomStash[0].damagePower + " nodules of damage!");
    enemyDefense = enemyDefense - randomStash[0].damagePower;
    if (inventory.length === 5) {
        console.log("Everything starts to get fuzzy and you suddenly wake up in your bed at home. You realize you fell asleep while scrolling through reddit again")
        return endGame();
    }
    if (enemyDefense <= 0) {
        newStash = itsAlive[0];
        inventory.push(newStash.stash);
        inventoryNames.push(newStash.stash.itemType);
        console.log("You have defeated your enemy! You gain 20 health points!");
        userHealth = userHealth + 20;
        continuesWalking();
    } else if (enemyDefense > 0) {
        beAttacked()
        if (userHealth < 0) {
            console.log("This is where you die");
            return false;
        } else {
            console.log("You boldly continue the fight!")
        }
    }


}

function beAttacked() {
    console.log(itsAlive[0].name + " attacks you with " + itsAlive[0].power + " and deals " + itsAlive[0].hitPoints + " nodules of damage!");
    return userHealth = (userHealth - itsAlive[0].hitPoints);
}

introduction();

while (userWalks()) {
    theGame = userWalks();
    if (theGame == undefined) {
        theGame = true;
    }
}