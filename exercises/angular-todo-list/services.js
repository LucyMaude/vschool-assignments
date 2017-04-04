angular.module("ngApp")

    .service("ngService", ["$http", function ($http) {

        this.retrieve = function () {
            var newObject = {};
            return $http.get("http://api.vschool.io/lucymaude/todo").then(function (results) {
                newObject = results.data;
                return newObject;
            });
        };

        this.addTo = function (inputs) {
            var newObject = {};
            return $http.post("http://api.vschool.io/lucymaude/todo/", inputs).then(function (results) {
                newObject = results.data;
                return newObject;
            })

        };

        this.delete = function (index, item) {
            return $http.delete("http://api.vschool.io/lucymaude/todo/" + item).then(function (results) {
                console.log(results.data);
            })
        };
  
        this.editing = function(item) {
            var newObject = {};
            return $http.put("http://api.vschool.io/lucymaude/todo/" + item._id, item).then(function(results){
                console.log(results.data);
            });
        }
    }]);
