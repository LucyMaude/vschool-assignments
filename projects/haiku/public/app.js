var app = angular.module("haikuApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            controller: "homeCtrl",
            templateUrl: "home/home.html"
        })
        .when("/learn-more", {
            controller: "learnCtrl",
            templateUrl: "learn-more/learn-more.html"
        })
        .when("/make", {
            controller: "makeCtrl",
            templateUrl: "make/make.html"
        })
        .when("/my-page", {
            controller: "pageCtrl",
            templateUrl: "my-page/my-page.html"
        })
        .when("/search", {
            controller: "searchCtrl",
            templateUrl: "search/search.html"
        })
        .when("/sign-up", {
            controller: "signUpCtrl",
            templateUrl: "sign-up/sign-up.html"
        })
        .when("/log-in", {
            controller: "loginCtrl",
            templateUrl: "log-in/log-in.html"
        })
        .otherwise({
        redirectTo: "/home"
    })
}]);

