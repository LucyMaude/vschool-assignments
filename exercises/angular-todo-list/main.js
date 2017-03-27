var app = angular.module("todoApp", []);

app.controller("todoCtrl", ["$scope", "$http", function ($scope, $http) {

    $http.get("http://api.vschool.io/lucymaude/todo")
        .then(function (results) {
            $scope.newArray = results.data;
            console.log(results.data);
        })
    
    $scope.addList = function (inputs) {

        $scope.newSubmission = {};

        $http.post("http://api.vschool.io/lucymaude/todo", inputs).then(function (results) {
            $scope.newArray.push(results.data);
        });
    }



    $scope.deleteMe = function (index, item) {
        $scope.newArray.splice(index, 1);
        $http.delete("http://api.vschool.io/lucymaude/todo/" + item).then(function () {
            console.log("goodbye")
        });
    }
}]);
