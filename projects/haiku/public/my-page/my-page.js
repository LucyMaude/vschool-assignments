var app = angular.module("haikuApp");

app.controller("pageCtrl", ["$scope", "myService", function($scope, myService){
    $scope.my = "test for my page";
    $scope.myService = myService.page;
}])