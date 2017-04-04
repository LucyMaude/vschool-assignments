var app = angular.module("wishApp");

app.directive("listView", function(){
   
    return {
        templateUrl: "directives/directive.html",
        restrict: "E"
    }
});