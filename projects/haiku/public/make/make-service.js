var app = angular.module("haikuApp");

app.service("makeService", ["$http", function($http){
    this.make = "test for make service";
}])