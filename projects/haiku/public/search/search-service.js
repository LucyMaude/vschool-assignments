var app = angular.module("haikuApp");

app.service("searchService", ["$http", function($http){
    this.search = "test for search service";
}])