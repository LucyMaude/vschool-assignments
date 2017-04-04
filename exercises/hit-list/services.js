angular.module("godfather");

app.service("lanisterService", ["$http", function ($http) {


    this.getItem = function () {
        var newObject = {};
        return $http.get("http://api.vschool.io:6543/hitlist.json").then(function (response) {
            newObject = response.data;
            console.log(response.data);
            return newObject;
        })
    };

}]);
