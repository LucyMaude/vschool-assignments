var app = angular.module("haikuApp");

app.service("loginService", ["$http", function($http){
    this.login = "test for login service";
}])