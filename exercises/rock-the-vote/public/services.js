angular.module("votingApp");

app.service("functionService", ["$http", function ($http) {

    this.retrieve = function () {
        return $http.get("/rocking-vote").then(function (response) {
            return (response.data);
        });
    };

    this.addNew = function (input) {
        return $http.post("/rocking-vote", input).then(function (response) {
            return response.data;
        });
    };


    this.increase = function (input) {
        var id = input._id;
        input.votes += 1;
        return $http.put("/rocking-vote/" + id, input).then(function (response) {
            return response.data;
        });
    };

    this.decrease = function (input) {
        var id = input._id;
        input.votes -= 1;
        return $http.put("/rocking-vote/" + id, input).then(function (response) {
            return response.data;
        });
    };
    
    this.postComment = function (input) {
        var id = input._id;
        return $http.put("/rocking-vote/" + id, input).then(function(response){
            return response.data;
        })
    }

}])
