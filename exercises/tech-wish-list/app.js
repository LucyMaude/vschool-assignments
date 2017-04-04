var app = angular.module("wishApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
    .when("/home", { 
        templateUrl: "home/home.html",
        controller: "homeCtrl"
        
    })
    .when("/phone", {
        controller: "phoneCtrl",
        templateUrl: "phone/phone.html"
    })
    .when("/other", {
        controller: "otherCtrl",
        templateUrl: "other/other.html"
    })
    .otherwise({
        redirectTo: "/home"
    });
}])

