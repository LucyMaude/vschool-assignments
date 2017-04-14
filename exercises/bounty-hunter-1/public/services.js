angular.module("bountyApp");

app.service("workingService", ["$http", function ($http) {

    this.extraTest = "This is Service"

    this.getAll = function () {
        var listOf;
        return $http.get("/bounties").then(function (response) {
            listOf = response.data;
            return listOf;
        });
    };
    
    this.postOne = function (input) {
        var listOf;
        return $http.post("/bounties/:_id", input).then(function(response){
            listOf = response.data;
            console.log(listOf);
            return listOf;
        });
    };
    
    this.updateOne = function (input) {
        var retrieve = input._id;
        var updated;
        return $http.put("http://localhost:3000/bounties/" + retrieve, input).then(function(response){
            updated = response.data;
            return updated;
            console.log(response.data) 
        });
    };

    this.deleteOne = function (input) {
        var removed;
        return $http.delete("/bounties/" + input).then(function(response){
            removed = response.data;
            return removed;
        });
    };


}])
