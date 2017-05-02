angular.module("personalApp");

app.controller("starkCtrl", ["$scope", "starkService", function ($scope, starkService) {
    $scope.stark = "stark";
    //    console.log("stark works");
    //
    //    $scope.arrayOfPov = [
    //        "http://www.anapioficeandfire.com/api/characters/60",
    //      "http://www.anapioficeandfire.com/api/characters/130",
    //      "http://www.anapioficeandfire.com/api/characters/148",
    //        "http://www.anapioficeandfire.com/api/characters/149",
    //      "http://www.anapioficeandfire.com/api/characters/150",
    //        "http://www.anapioficeandfire.com/api/characters/168",
    //      "http://www.anapioficeandfire.com/api/characters/208",
    //        "http://www.anapioficeandfire.com/api/characters/216",
    //      "http://www.anapioficeandfire.com/api/characters/232",
    //        "http://www.anapioficeandfire.com/api/characters/238",
    //        "http://www.anapioficeandfire.com/api/characters/329"
    //      "http://www.anapioficeandfire.com/api/characters/339",
    //        "http://www.anapioficeandfire.com/api/characters/529",
    //        "http://www.anapioficeandfire.com/api/characters/576",
    //      "http://www.anapioficeandfire.com/api/characters/583",
    //        "http://www.anapioficeandfire.com/api/characters/751",
    //      "http://www.anapioficeandfire.com/api/characters/957",
    //        "http://www.anapioficeandfire.com/api/characters/1022",
    //      "http://www.anapioficeandfire.com/api/characters/1052",
    //      "http://www.anapioficeandfire.com/api/characters/1109",
    //        "http://www.anapioficeandfire.com/api/characters/1074",
    //        "http://www.anapioficeandfire.com/api/characters/1166",
    //        "http://www.anapioficeandfire.com/api/characters/1267",
    //        "http://www.anapioficeandfire.com/api/characters/1295",
    //      "http://www.anapioficeandfire.com/api/characters/1303",
    //        "http://www.anapioficeandfire.com/api/characters/1319"
    //    ];


//    $scope.names = [];
    $scope.houseInformation = [];

    starkService.houseInfo().then(function (house) {
        $scope.houseInformation.push(house);
    });

//    starkService.getArray().then(function (promises) {
//        for (var i = 0; i < promises.length; i++) {
//            promises[i].then(function (response) {
//                $scope.names.push(response.data);
//            })
            //            names.push(promises[i].name)
//        }
//    })
}])
