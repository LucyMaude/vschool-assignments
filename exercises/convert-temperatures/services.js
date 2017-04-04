angular.module("climateApp");

app.service("climateService", ["$http", function($http){
    
    this.test = "this is a test";
    this.key = "c41278fb054640a64b82b9d0c81313f0";
    var self = this;
    this.get = function(lat, long){
        var output;
        return $http.jsonp("https://api.darksky.net/forecast/c41278fb054640a64b82b9d0c81313f0/" + lat + "," + long + "?callback=JSON_CALLBACK").then(function(response){
            output = response.data.currently.apparentTemperature;
            return output;
        })
    }
    
}])