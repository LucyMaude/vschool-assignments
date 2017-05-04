angular.module("personalApp");

app.controller("characterCtrl", ["$scope", "characterService", function ($scope, characterService) {
    $scope.character = "character";

    $scope.names = [];
    
    $scope.filtered = $scope.names.sort();
    characterService.getArray().then(function (promises) {
        console.log(promises);
        for (var i = 0; i < promises.length; i++) {
            promises[i].then(function (response) {
                console.log(response);
                $scope.names.push(response.data);
            })
        }
    });
}])