var app = angular.module("haikuApp");

app.controller("makeCtrl", ["$scope", "makeService", function($scope, makeService){
   
    $scope.make = "test for make";
    $scope.makeService = makeService.make;
}])