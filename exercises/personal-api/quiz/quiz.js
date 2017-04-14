angular.module("personalApp");

app.controller("quizCtrl", ["$scope","quizService", function ($scope, quizService) {
    console.log("quiz works");
    $scope.questions = quizService.arrayOfQuestions;
    
    $scope.switch = function (input, first, second) {
        
        quizService.moveOver(input, first, second);
        $scope.questions = quizService.arrayOfQuestions;
        console.log($scope.questions);
    }
}])

//var seasons = "Pick a Season?";
//var seasonsArray = ["Winter", "Spring", "Summer", "Fall"];
//var holiday = "What's your ideal holiday?";
//var holidayArray = ["Swimming, Jet skis, anything by the beach", "Reading and walks in the country", "Music Festival", "Climbing, Hiking, Canyoneering, I want adventure in the great wide open"];
//var loveLife = "How's your love life";
//var loveLifeArray = ["He doesn't know I exist", "He exists but he's my brother", "I have many lovers. They are all equally not my brother, and they are all equally.....horrible", "We have a Romeo and Juliet kind of love"];
//var siblings = "Do you have any siblings?";
//var siblingsArray = ["Yes but they're much older", "Yes but we aren't close", "Yes and we are close....very very close", "I probably do somewhere"];
//var pets = "What kind of pets do you have?";
//var petsArray = [ "I have a faithful hound. He's grumpy and mangey but he'll do", "I don't like animals because I have no soul", "All animals are my pets"];
