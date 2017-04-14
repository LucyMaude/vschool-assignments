var app = angular.module("personalApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "homeCtrl"
        })
        //    .when("/arryn", {
        //        templateUrl: "arryn/arryn.html",
        //        controller: "arrynCtrl"
        //    })
        //    .when("/frey", {
        //        templateUrl: "frey/frey.html",
        //        controller: "freyCtrl"
        //    })
        .when("/greyjoy", {
            templateUrl: "greyjoy/greyjoy.html",
            controller: "greyjoyCtrl"
        })
        .when("/lannister", {
            templateUrl: "lannister/lannister.html",
            controller: "lannisterCtrl"
        })
        .when("/stark", {
            templateUrl: "stark/stark.html",
            controller: "starkCtrl"
        })
        .when("/targaryen", {
            templateUrl: "targaryen/targ.html",
            controller: "targCtrl"
        })
        .when("/baratheon", {
            templateUrl: "baratheon/baratheon.html",
            controller: "baratheonCtrl"
        })
        .when("/quiz", {
            templateUrl: "quiz/quiz.html",
            controller: "quizCtrl"
        })
        .when("/characters", {
            templateUrl: "characters/characters.html",
            controller: "characterCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        });
}])
