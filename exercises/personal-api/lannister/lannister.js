angular.module("personalApp");

app.controller("lannisterCtrl", ["$scope", "lanService", function ($scope, lanService) {
    $scope.lannister = "lannister";
    console.log("lannister works");


    $scope.houseInformation = [];

    lanService.houseInfo().then(function (house) {
        $scope.houseInformation.push(house);
    });

}])
