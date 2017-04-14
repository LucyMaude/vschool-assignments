var app = angular.module("bountyApp", []);

app.controller("bountyCtrl", ["$scope", "workingService", function ($scope, workingService) {
    $scope.test = "test";
    console.log($scope.test);
    console.log(workingService.extraTest);
        workingService.getAll().then(function (listOf) {
            $scope.displayMe = listOf;
        });

    $scope.post = function (input) {
        workingService.postOne(input).then(function (listOf) {
            console.log(listOf);
            $scope.displayMe = listOf;
        });
    };

    $scope.editMe = function (input, index) {
        workingService.updateOne(input).then(function (updated) {
            $scope.displayMe[index] = updated;
        });
    };

    $scope.delete = function (input, index) {
        
        workingService.deleteOne(input).then(function (removed) {
            console.log(removed);
            $scope.displayMe.splice(index, 1);
        });
    };

}])
