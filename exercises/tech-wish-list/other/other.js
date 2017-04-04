var app = angular.module("wishApp");

app.controller("otherCtrl", ["$scope", function ($scope) {
    $scope.headset = {
        name: "Headset",
        image: "https://images-na.ssl-images-amazon.com/images/I/71Ob36mBOnL._SL1500_.jpg",
        price: "27",
    };
    $scope.music = {
        name: "Music Editing Software",
        image: "https://images-na.ssl-images-amazon.com/images/I/81eIjyQ%2BHzL._SL1500_.jpg",
        price: "200",
    };
    $scope.elio = {
        name: "Elio",
        image: "http://cdn.bgr.com/2016/06/paul-elio1.jpg?quality=98&strip=all",
        price: "8000",
    };
    $scope.makey = {
        name: "Makey Makey",
        image: "https://images-na.ssl-images-amazon.com/images/I/61ZhXMb3yRL._SL1280_.jpg",
        price: "50",
    };
    $scope.theArray = [$scope.headset, $scope.music, $scope.elio, $scope.makey];
    console.log($scope.theArray);

}])
