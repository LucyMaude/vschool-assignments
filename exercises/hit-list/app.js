var app = angular.module("godfather", []);

app.controller("godCtrl", ["$scope", "$http", function ($scope, $http) {
    
    $http.get("http://api.vschool.io:6543/hitlist.json")
    .then(function(response) {
        $scope.hitList = response.data;
        console.log($scope.hitList);
    })
}]);