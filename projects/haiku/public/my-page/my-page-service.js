angular.module("haikuApp");

app.service("myService", ["$http", function($http){
    this.get = function() {
        return $http.get("/haiku").then(function(response){
            console.log(response.data);
            return response.data;
        })
    };
    
    this.addNew = function(input){
        return $http.post("/haiku", input).then(function(response){
            console.log(response.data);
            return response.data;
            
        })
    };
    
    this.delete = function (input){
        return $http.delete("/haiku/" + input._id, input).then(function(response){
            return response.data;
        })
    }
    this.put = function (input, second) {
        return $http.put("/haiku/" + input._id, second).then(function(response){
            return response.data;
        })
    }
}])