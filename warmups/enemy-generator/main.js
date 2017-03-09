function generateEnemy() {
    function Enemy(type, hitPoints, defense) {
        this.type = type;
        this.hitPoints = hitPoints;
        this.defense = defense;
    }

    for (var i = 0; i < 100; i++) {
        var type = function () {
            var pickEnemy = Math.random();
            if (pickEnemy < .34) {
                return ("Ancient Dragon");
            } else if (pickEnemy < .67 && pickEnemy >= .34) {
                return ("Prowler");
            } else if (pickEnemy >= .67) {
                return ("Mighty Grunt");
            }
        };
//        console.log(type());
        var enemyType = type();

        var hitPoints = function (type) {
            if (type === "Ancient Dragon") {
                var min = Math.ceil(80);
                var max = Math.floor(100);
                return Math.floor(Math.random() * (max - min)) + min;
            } else if (type === "Prowler") {
                var min = Math.ceil(50);
                var max = Math.floor(79);
                return Math.floor(Math.random() * (max - min)) + min;
            } else if (type === "Mighty Grunt") {
                var min = Math.ceil(20);
                var max = Math.floor(49);
                return Math.floor(Math.random() * (max - min)) + min;
            };
        }

        var hitPointValue = hitPoints(enemyType);
//        console.log(hitPointValue);

        var defense = function (hitpoints) {
            return (hitpoints * 3)
        };

        var defenseValue = defense(hitPointValue);
//        console.log(defenseValue);

        var enemy = new Enemy(enemyType, hitPointValue, defenseValue);

        console.log(enemy);

    }

}

generateEnemy();