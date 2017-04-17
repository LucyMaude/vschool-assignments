angular.module("haikuApp");

app.controller("signUpCtrl", ["$scope", "signUpService", function($scope, signUpService){
    
    $scope.sign = "test for sign";
    $scope.signService = signUpService.sign;
}])