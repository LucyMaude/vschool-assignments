angular.module("personalApp");

app.service("targService", ["$http", function ($http) {   
this.houseInfo = function () {
        var house;
        return $http.get("http://anapioficeandfire.com/api/houses/378").then(function(response){
            console.log(response.data);
            house = response.data;
            return house;
        })
    };
    
}]);