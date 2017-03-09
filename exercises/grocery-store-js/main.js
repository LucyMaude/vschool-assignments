var shopper = {
    storeLocation: "City Center",
    visitsPerWeek: 7,
    dollarsPerVisit: 15,
    isGlutenFree: true,
    commonPurchases: ["chocolate", "butternut squash", "chorizo", "red wine", "avocado"],
    dollarsPerWeek: function () {
        console.log(this.visitsPerWeek * this.dollarsPerVisit);
    },
    groceryCart: ["spinach", "eggs", "milk", "coffee", "chicken", "bananas", "greek yoghurt"]
};

shopper.dollarsPerWeek();

var employee = {
    name: "Seymore Butts",
    pets: [
        {
            type: "reptile",
            place: "Desert",
            species: "Iguana"
            },
        {
            type: "reptile",
            place: "Brenan's Place",
            species: "Water Dragon"
            },
        {
            type: "reptile",
            place: "Mexico",
            species: "Gecko"
            }
        ],
    yearsEmployed: 12,
    isFired: function () {
        return this.yearsEmployed > 20;
    }
}

employee.isFired();