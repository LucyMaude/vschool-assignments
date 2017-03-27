var app = angular.module("uglyApp", []);

app.controller("uglyCtrl", ["$scope", function($scope) {
    $scope.applyUgly = [];
    
    $scope.submitUgly = function (val) {
        $scope.applyUgly.push(val);
        $scope.newSubmission = {};
        console.log(val);
    }
}]);
