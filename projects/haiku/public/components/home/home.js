angular.module("HaikuApp.Auth");

app.controller("homeCtrl", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            $location.path("/search");
        }, function (response) {
            alert(response.data.message);
        });
    };

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
    };

}])
