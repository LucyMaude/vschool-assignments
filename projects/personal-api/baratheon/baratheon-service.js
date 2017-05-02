angular.module("personalApp");

app.service("baratheonService", ["$http", function ($http) {

    this.randomVar = "random baratheon variable";
    var self = this;
    
    this.houseInfo = function () {
        var house;
        return $http.get("http://anapioficeandfire.com/api/houses/17").then(function(response){
            console.log(response.data);
            house = response.data;
            return house;
        })
    };
}])