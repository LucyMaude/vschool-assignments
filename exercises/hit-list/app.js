var app = angular.module("godfather", []);

app.controller("godCtrl", ["$scope", "lanisterService", function ($scope, lanisterService) {

    $scope.hitList = [];

    lanisterService.getItem().then(function (newObject) {
        console.log(newObject);
        $scope.hitList = newObject;
        //        return $scope.hitList;
    });

}]);
