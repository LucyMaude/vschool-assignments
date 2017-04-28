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
        .when("/my-page", {
            controller: "pageCtrl",
            templateUrl: "components/my-page/my-page.html"
        })
        .when("/search", {
            controller: "searchCtrl",
            templateUrl: "components/search/search.html"
        })
        .otherwise({
        redirectTo: "/home"
    })
}]);

