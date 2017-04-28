var app = angular.module("haikuApp");

app.controller("searchCtrl", ["$scope", "haikuService", function($scope, haikuService){
    
    haikuService.getAll().then(function(response){
        $scope.display = response;
    })
    
//    $scope.getRandom = function () {
//        haikuService.random().then(function(response){
//            $scope.display = response;
//        });
//    };
    
    $scope.search = function (query) {
        haikuService.search(query).then(function(response){
            $scope.display = response;
        })
    }
    
}])