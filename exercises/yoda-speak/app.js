var app = angular.module("yodaApp", []);

app.controller("yodaCtrl", ["$scope", "$http", function ($scope, $http) {

    var toGet = {
        Method: "GET",
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    
    $scope.workPlease = function(info) {

        var top = "https://yoda.p.mashape.com/yoda?sentence=" + $scope.sentence;

        $http.get(top, toGet).then(function(response) {
            console.log(response.data);
            $scope.sayMe = response.data;
        })
    };

}]);