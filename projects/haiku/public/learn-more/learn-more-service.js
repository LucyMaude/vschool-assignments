var app = angular.module("haikuApp");

app.service("learnService", ["$http", function($http){
    this.learn = "test for learn service";
}])