var app = angular.module("ngApp", []);

app.controller("ngCtrl", ["$scope", "ngService", function ($scope, ngService) {

    ngService.retrieve().then(function (newObject) {
        $scope.newArray = newObject;
    })

    $scope.addList = function (input) {
        ngService.addTo(input).then(function (newObject) {
            console.log(newObject);
            $scope.newArray.push(newObject);
        })
    };

    $scope.deleteMe = function (index, item) {
        $scope.newArray.splice(index, 1);
        ngService.delete(index, item).then(function () {
            console.log("A success");
        })
    };

    $scope.editMe = function (item) {

        ngService.editing(item).then(function () {
            console.log("this worked too");
        })
        //        $scope.newArray = ngService.editing(item);
        //    };

        //        original put function
        //        function(item){
        //        console.log("something");
        //        console.log(item);
        //        $http.put("http://api.vschool.io/lucymaude/todo/" + item._id, item)
    }
}]);
