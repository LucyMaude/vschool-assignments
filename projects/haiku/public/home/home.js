angular.module("haikuApp");

app.controller("homeCtrl", ["$scope", "homeService", function($scope, homeService){
    $scope.home = "test for home";
    $scope.homeService = homeService.home;
}])