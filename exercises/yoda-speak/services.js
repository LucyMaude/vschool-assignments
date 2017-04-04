angular.module("yodaApp");

app.service("yodaService", ["$http", function($http){
    
    this.get = {
        Method: "GET",
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    }
    var self = this;
    
    this.newSentence = function(info){
        var top = "https://yoda.p.mashape.com/yoda?sentence=" + info;
        var newObject;
       return $http.get(top, self.get).then(function(response) {
            console.log(response.data);
            newObject = response.data;
            return newObject;
        });
    };
    
}]);