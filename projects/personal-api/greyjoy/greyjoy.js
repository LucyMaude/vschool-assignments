angular.module("personalApp");

app.controller("greyjoyCtrl", ["$scope", "greyService", function ($scope, greyService) {
    $scope.houseInformation = [];

    greyService.houseInfo().then(function (house) {
        $scope.houseInformation.push(house);
    });

}])
