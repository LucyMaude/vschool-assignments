var app = angular.module("HaikuApp.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    $scope.loginFun = "logging in is fun";
    
    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            $location.path("/my-page");
        }, function (response) {
            alert(response.data.message);
        });
    }
}]);