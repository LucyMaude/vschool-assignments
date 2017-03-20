var obj = {
    name: "Mario",
    totalCoins: 0,
    status: "Small",
    star: true,
    setName: function (namePicked) {
            this.name = namePicked;
    },
    gotHit: function () {
        if (this.status === "Powered Up") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Small";
        } else if (this.status === "Small") {
             this.status = "Dead";
            this.gameActive = false;
        }
    },
    gotPowerUp: function () {
        if (this.status === "Dead") {
            this.status = "Small";
        } else if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        }
    },
    gameActive: true,
    addCoin: function () {
        this.totalCoins ++;
    },
    printStats: function () {
        console.log("Name: " + this.name);
        console.log("Status: " + this.status);
        console.log("Total Coins: " + this.totalCoins);
        console.log("Is a star active? " + this.star);
    },
};


function pickValue () {
    var randomVar = Math.floor(Math.random() * (3 - 0) + 0);
    if (randomVar === 0){
        return obj.gotHit();
    } else if (randomVar === 1){
        return obj.gotPowerUp();
    } else if (randomVar === 2){
        return obj.addCoin();
    }
}

pickValue();
console.log(obj.printStats());
pickValue();
console.log(obj.printStats());
pickValue();
console.log(obj.printStats());