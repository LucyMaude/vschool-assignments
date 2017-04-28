var app = angular.module("HaikuApp.Auth");

app.controller("SignupController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {  
    
    $scope.passwordMessage = "empty message";

    $scope.signup = function (user) {
        if (user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match.";
        } else {
            UserService.signup(user).then(function (response) {
                $location.path("/learn-more");
            }, function (response) {
                alert("There was a problem: " + response.data);
            });
        }
    }
}]);