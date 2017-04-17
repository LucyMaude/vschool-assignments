var app = angular.module("haikuApp");

app.service("signUpService", ["$http", function($http){
    this.sign = "test for sign up service";
}])
