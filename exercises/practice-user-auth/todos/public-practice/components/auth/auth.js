var app = angular.module("TodoApp.Auth", []);

app.config(["$routeProvider", function ($routeProvider) {  
    $routeProvider
        .when("/signup", {
            templateUrl: "components/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "components/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            controller: "LogoutController",
            template: ""
        })
}]);



