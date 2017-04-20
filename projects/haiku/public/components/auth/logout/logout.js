var app = angular.module("HaikuApp.Auth");

app.controller("LogoutController", ["UserService", function (UserService) {  
    UserService.logout();
}]);