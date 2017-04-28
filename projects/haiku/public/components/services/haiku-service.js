angular.module("haikuApp");

app.service("haikuService", ["$http", function ($http) {
    this.get = function () {
        return $http.get("api/haiku").then(function (response) {
            console.log(response.data);
            return response.data;
        })
    };

    this.getAll = function () {
        return $http.get("/api/haiku/all").then(function (response) {
            console.log(response.data);
            return response.data;
        })
    };
    
    this.search = function(query){
        console.log(query);
        return $http.get(`/api/haiku/all/?tags=${query}`).then(function(response){
            console.log(response.data);
            return response.data;
        })
    }
    
    this.addNew = function (input) {
        return $http.post("api/haiku", input).then(function (response) {
            console.log(response.data);
            return response.data;

        })
    };

    this.delete = function (input) {
        return $http.delete("api/haiku/" + input._id, input).then(function (response) {
            return response.data;
        })
    };
    
    this.put = function (input, second) {
        return $http.put("api/haiku/" + input._id, second).then(function (response) {
            return response.data;
        })
    };
}])
