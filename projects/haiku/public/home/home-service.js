var app = angular.module("haikuApp");

app.service("homeService", ["$http", function($http){
    this.home = "test for home service";
}])