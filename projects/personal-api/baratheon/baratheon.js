angular.module("personalApp");

app.controller("baratheonCtrl", ["$scope", "baratheonService", function ($scope, baratheonService) {
    $scope.tyrell = "baratheon";
    console.log("baratheon works");


    $scope.houseInformation = [];

    baratheonService.houseInfo().then(function (house) {
        $scope.houseInformation.push(house);
    });
}])
