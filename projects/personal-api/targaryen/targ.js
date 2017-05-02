angular.module("personalApp");

app.controller("targCtrl", ["$scope", "targService", function ($scope, targService) {
    $scope.targ = "targaryen";
    console.log("targaryen works");


    $scope.houseInformation = [];

    targService.houseInfo().then(function (house) {
        $scope.houseInformation.push(house);
    });

}])