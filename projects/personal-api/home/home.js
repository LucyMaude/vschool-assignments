angular.module("personalApp");

app.controller("homeCtrl", ["$scope", function($scope){
    $scope.home = "home";
    console.log("home works");
    
}])