var main = angular.module("newModule", [])

main.controller("controllerName", ["$scope", function ($scope, addToList) {

    $scope.newListItem = {
        toBuy: $scope.name,
        howMuch: $scope.cost
    }

}]);