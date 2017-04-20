var app = angular.module("haikuApp", ["ngRoute", "HaikuApp.Auth"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            controller: "homeCtrl",
            templateUrl: "components/home/home.html"
        })
        .when("/learn-more", {
            controller: "learnCtrl",
            templateUrl: "components/learn-more/learn-more.html"
        })
//        .when("/make", {
//            controller: "makeCtrl",
//            templateUrl: "make/make.html"
//        })
        .when("/my-page", {
            controller: "pageCtrl",
            templateUrl: "components/my-page/my-page.html"
        })
        .when("/search", {
            controller: "searchCtrl",
            templateUrl: "components/search/search.html"
        })
//        .when("/sign-up", {
//            controller: "signUpCtrl",
//            templateUrl: "sign-up/sign-up.html"
//        })
//        .when("/log-in", {
//            controller: "loginCtrl",
//            templateUrl: "log-in/log-in.html"
//        })
        .otherwise({
        redirectTo: "/home"
    })
}]);

