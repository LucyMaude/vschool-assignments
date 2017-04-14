var app = angular.module("votingApp", []);

app.controller("votingCtrl", ["$scope", "functionService", function ($scope, functionService) {

    functionService.retrieve().then(function (retrieved) {
        console.log(retrieved);
//        retrieved.sort(function (a, b) {
//            if (a.votes > b.votes)
//                return -1;
//            if (a.votes < b.votes)
//                return +1;
//            return 0;
//        });

        $scope.displayArr = (retrieved);
    });

    $scope.entryFunction = function (input) {
        console.log(input);
        functionService.addNew(input).then(function (newest) {
            $scope.displayArr.push(newest);
        });
    };

    $scope.add = function (input, index) {

        functionService.increase(input).then(function (increased) {
            input = increased;
        })
    }


    $scope.subtract = function (input, index) {
        functionService.decrease(input).then(function (decreased) {
            input = decreased;
        })
    }

    $scope.newComment = function (oldInput, newInput, index) {
        var newObject = oldInput.comments.push(newInput);
        console.log(newInput);
        console.log(oldInput);
        functionService.postComment(oldInput).then(function (output) {
            $scope.displayArr[index] = output;
        })
    }

}]);
