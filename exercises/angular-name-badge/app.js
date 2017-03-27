var app = angular.module("nameBadge", []);

app.controller("badgeCtrl", ["$scope", function ($scope){
    $scope.badge = [];
    $scope.submit = function (newInfo) {
        $scope.badge.push(newInfo);
        $scope.nameBadge = {};
        console.log(newInfo);
    }
}]);

function(nameBadge){
    $scope.badge.push(nameBadge);
    $scope.nameBadge={}
}