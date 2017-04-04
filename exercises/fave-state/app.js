var app = angular.module("stateApp", ["ngRoute"]);

app.config(function($routeProvider){
        
$routeProvider
    .when("/home", {
        templateUrl:"home/home.html",
        controller:"homeCtrl",
    })
    
    .when("/about", {
        templateUrl:"about/about.html",
        controller:"aboutCtrl",
    })
    
    .when("/whyilove", {
        templateUrl:"whyilove/whyilove.html",
        controller:"loveCtrl",
    })
    
})

app.directive("mikeTheMink", function(){
    var algo = function (scope, element, attrs){
        element.on("mouseover", function(event){
            
        })
    };
    return {
        template: "<img class='img-responsive' ng-hide='algo' ng-mouseover='algo=true' src='http://cdn1.arkive.org/media/1E/1E2F8B04-9E0F-4DC2-8D00-CBDA8A71F126/Presentation.Large/Weasel-on-hind-legs-eating-berries.jpg'>"
    };
});
