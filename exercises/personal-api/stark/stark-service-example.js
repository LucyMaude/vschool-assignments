angular.module("personalApp");

app.service("starkService", ["$http", function ($http) {

    this.randomVar = "random stark variable";
    var self = this;
    
    this.houseInfo = function () {
        var house;
        return $http.get("http://www.anapioficeandfire.com/api/houses/362").then(function(response){
            console.log(response.data);
            house = response.data;
            return house;
        })
    };

//    this.getArray = function () {
//        var character;
//        return $http.get("http://www.anapioficeandfire.com/api/houses/362")
//            .then(function (response) {
//                character = response.data.swornMembers;
//                return character
//            })
//            .then(function (character) {
//                var promises = [];
//                for (var i = 0; i < character.length; i++) {
//                    promises.push($http.get(character[i]).then(function (response) {
//                        return response;
//                    }))
//                }
//                return promises;
//            })
//    }

}])
