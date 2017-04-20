var app = angular.module("haikuApp");

app.controller("pageCtrl", ["$scope", "myService", function ($scope, myService) {

    myService.get().then(function (response) {
        console.log(response);
        $scope.displayHaiku = response;
    });
    
    $scope.createFunction = function (input) {
        myService.addNew(input).then(function (response) {
            $scope.displayHaiku.push(response);
        })
    };
    
    $scope.delete = function(input, index){
        var thisIndex = index;
        myService.delete(input).then(function(reponse){
            $scope.displayHaiku.splice(thisIndex, 1);
        })
    }
    
    $scope.changeFunction = function (oldInput, newInput, index){
        var thisIndex = index;
        console.log(thisIndex);
        console.log(oldInput);
        console.log(newInput);
        myService.put(oldInput, newInput).then(function(response){
            $scope.displayHaiku[thisIndex] = response;
        })
    }
}])
