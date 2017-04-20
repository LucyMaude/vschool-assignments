var app = angular.module("haikuApp");

app.controller("searchCtrl", ["$scope", "searchService", function($scope, searchService){
    
    $scope.search = "test for search";
    $scope.searchService = searchService.search;
}])