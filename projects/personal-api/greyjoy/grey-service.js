angular.module("personalApp");

app.service("greyService", ["$http", function ($http) {

    this.randomVar = "random grey variable";
    var self = this;
    
    this.houseInfo = function () {
        var house;
        return $http.get("http://anapioficeandfire.com/api/houses/169").then(function(response){
            console.log(response.data);
            house = response.data;
            return house;
        })
    };
    
}])