var app = angular.module("haikuApp");

app.service("myService", ["$http", function($http){
    this.page = "test for page service";
}])