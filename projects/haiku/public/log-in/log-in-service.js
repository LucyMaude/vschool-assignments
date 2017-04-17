var app = angular.module("haikuApp");

app.controller("loginCtrl", ["$scope", "loginService", function($scope, loginService){
    
    $scope.login = "test for login";
    $scope.loginService = loginService.login;
}])