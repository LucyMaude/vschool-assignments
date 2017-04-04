var app = angular.module("cartoonApp", []);

app.controller("cartoonCtrl", ["$scope", "cartoonService", function ($scope, cartoonService) {
    $scope.cartoonArray = cartoonService.cartoonPost;

    $scope.addCartoon = function (item) {
       $scope.cartoonArray = cartoonService.addObject(item);
        $scope.add = {};
        console.log($scope.cartoonArray);
    };

}]);
