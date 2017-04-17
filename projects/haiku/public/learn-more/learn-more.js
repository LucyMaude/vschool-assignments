var app = angular.module("haikuApp");

app.controller("learnCtrl", ["$scope", "learnService", function($scope, learnService){
    $scope.learn = "test for learn";
    $scope.learnService = learnService.learn;
}])