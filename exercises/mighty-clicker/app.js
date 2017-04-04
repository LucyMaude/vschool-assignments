var app = angular.module("clickerApp", []);

app.controller("clickerCtrl", ["$scope", "BlueService", "RedService", function ($scope, BlueService, RedService) {
    $scope.scoreRed = RedService.score;
    $scope.scoreBlue = BlueService.score;

    $scope.clickedRed = function () {
        console.log(RedService);
        $scope.scoreRed = RedService.increment();
         $scope.scoreBlue = BlueService.decrement();
        if (RedService.score === 0) {
            $scope.scoreRed = RedService.reset();
        } else if (BlueService.score === 0) {
            $scope.scoreBlue = BlueService.reset();
        }

    };

    $scope.clickedBlue = function () {
        console.log(BlueService);
        $scope.scoreBlue = BlueService.increment();
       $scope.scoreRed = RedService.decrement();
        if (BlueService.score === 0) {
            $scope.scoreBlue = BlueService.reset();
        } else if (RedService.score === 0) {
            $scope.scoreRed = RedService.reset();
        }

    };
}]);

app.service("BlueService", function () {
    this.score = 100;
    this.increment = function () {
        return (this.score += 1);
    };
    this.decrement = function () {
        return (this.score -= 1);
    };
    this.reset = function () {
        this.score = 100;
    };
});

app.service("RedService", function () {
    this.score = 100;
    this.increment = function () {
        return (this.score += 1);
    };
    this.decrement = function () {
        return (this.score -= 1);
    };
    this.reset = function () {
        this.score = 100;
    };
});
