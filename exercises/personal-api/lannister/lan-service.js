angular.module("personalApp");

app.service("lanService", ["$http", function ($http) {   
this.houseInfo = function () {
        var house;
        return $http.get("http://anapioficeandfire.com/api/houses/229").then(function(response){
            console.log(response.data);
            house = response.data;
            return house;
        })
    };
    
}]);