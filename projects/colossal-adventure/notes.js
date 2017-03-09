
    var randomMath = function randomMath(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    var enemigos = [
        {
            name: "Edward Cullen",
            power: "the power of undying love",
            hitPoints: randomMath(5, 20),
            defense: 10,
        },
        {
            name: "Chi-Chi",
            power: "the power of the CHANCLA",
            hitPoints: randomMath(20, 50),
            defense: 30,
        },
        {
            name: "Lord Voldemort",
            power: "a powerful curse",
            hitPoints: randomMath(50, 80),
            defense: 70,
},
        {
            name: "Miley Cyrus",
            power: "a wrecking ball",
            hitPoints: randomMath(80, 100),
            defense: 100,
}, 
        {
            name: "The Ghost of Harambes Past",
            power: "the impact of his untimely death",
            hitPoints: randomMath(1, 5),
            defense: 0,
}
];

    var itsAlive = {};

    function pickEnemyAtRandom() {
        var pickEnemy = Math.random();
        if (pickEnemy < .1) {
            itsAlive.push(enemigos[0]);
        } else if (pickEnemy < .3 && pickEnemy >= .1) {
            itsAlive.push(enemigos[0]);
        } else if (pickEnemy < .6 && pickEnemy >= .3) {
            itsAlive.push(enemigos[0]);
        } else if (pickEnemy < .9 && pickEnemy >= .6) {
            itsAlive.push(enemigos[0]);
        } else if (pickEnemy >= .9) {
            itsAlive.push(enemigos[0]);
        }
    }


    
    
    
    
    
    
    
    
    
    
    

//The user can decide to attack or run 
//function runs to ask user if they would like to run or attack. 


//If attacking, you will choose a random attack power between a min and max
//if (y) {display power bar} else if (n) {choose 1 or 2} 


//If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping


//After the player attacks or runs the enemy attacks back for a random damage amount. Function runs to cause enemy to attack us and we receive damage at a random level (between 0 and 1). If 1 then we die. if less than 1 we survive but maintain damage. 


//If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
//needs HP element that lowers w/ HP and raises w/ damage caused by enemy. 


//If the enemy kills the player the console prints a cool death message and the game ends

//Inventory 
//When the player kills enemies, they are awarded with items

//"A Wild __ has appeared!"
//""
    
    
        console.log("Oh No! " + enemy.type + " has appeared and blocks your path!");
    var runOrFight = ["Run like a Man", "Fight like a Lady"];
    var whatYouDo = readlineSync.keyInSelect(runOrFight, "Run or Fight? Only you can choose your destiny!");

    if (whatYouDo === 1) {
        randomRun();
        if (randomRun === 1) {

        } else if (randomRun === 2) {}
    } else if (whatYouDo == 2) {
        randomStrength();
    }

    function randomStrength() {
        var min = Math.ceil(15);
        var max = Math.floor(80);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function randomRun() {
        var min = Math.ceil(1);
        var max = Math.floor(2);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}


