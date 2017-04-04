var app = angular.module("climateApp", []);

app.controller("climateCtrl", ["$scope", "climateService", function ($scope, climateService) {
    $scope.text = "text";
    $scope.newText = climateService.test;
    $scope.lat = 40.7656;
    $scope.long = -111.8884;
    $scope.types = ["Celsius", "Fahrenheit", "Kelvin"];
    $scope.temperature;
    $scope.runFunction = function () {
        climateService.get($scope.lat, $scope.long).then(function (output) {
            $scope.temperature = output;
        })
    };

}])


app.filter("changeTemp", function () {

    return function (input, type) {
        if (type === "Celsius") {
            output = Math.round(((input - 32) * 5 / 9)) + "°C";
        } else if (type === "Fahrenheit") {
            output = Math.round(input) + "°F";
        } else if (type=== "Kelvin") {
           output = Math.round((input + 459.67) * 5 / 9 ) + "°K"; 
        }
        return output;
    }

})
