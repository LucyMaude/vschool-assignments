angular.module("personalApp");

app.service("characterService", ["$http", function ($http) {
    
    var self = this;

    this.getArray = function () {
        var character;
        return $http.get("http://anapioficeandfire.com/api/houses/362")
            .then(function (response) {
            console.log(response);
                character = response.data.swornMembers;
                return character
            })
            .then(function (character) {
            console.log(character);
                var promises = [];
                for (var i = 0; i < character.length; i++) {
                    promises.push($http.get(character[i]))
                }
            console.log(promises);
                return promises;
            
            })
    }

}])