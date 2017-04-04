var app = angular.module("pokeApp", []);

app.controller("pokeCtrl", ["$scope", "pokeService", function($scope, pokeService) {

    $scope.showList = pokeService.list;
    $scope.add = function(item) {
        $scope.showList = pokeService.addPokemon(item);
    };
    $scope.remove = function(item) {
        $scope.showList = pokeService.removePokemon(item);
    };
}]);

app.service("pokeService", function() {
    this.list = [];
    var self = this;
    this.addPokemon = function(name) {
        self.list.push(name);
        return self.list;
    };
    this.removePokemon = function(name) {
        var index = self.list.indexOf(name);
        self.list.splice(index, 1);
        return self.list;
    };
});