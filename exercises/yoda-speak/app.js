var app = angular.module("yodaApp", []);

app.controller("yodaCtrl", ["$scope", "yodaService", function ($scope, yodaService) {


    $scope.workPlease = function (sentence) {
        yodaService.newSentence(sentence).then(function (newObject) {
            return $scope.sayMe = newObject;
        });

    };

}]);
