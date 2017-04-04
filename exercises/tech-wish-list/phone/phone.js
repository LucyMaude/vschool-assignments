var app = angular.module("wishApp");

app.controller("phoneCtrl", ["$scope", function ($scope) {
    $scope.desktop = {
        name: "PC Computer",
        image: "http://s7d1.scene7.com/is/image/officedepot/206117_p_gua520_3?$OD-Dynamic$&wid=572&hei=572",
        price: 500,
    };
    $scope.mac = {
        name: "iMac",
        image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ma/imac/gallery1/imac-gallery1-2015?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1473964718456",
        price: 1600,
    }
    $scope.game = {
        name: "Overwatch",
        image: "https://overwatch-a.akamaihd.net/img/logos/overwatch-share-3d5a268515283007bdf3452e877adac466d579f4b44abbd05aa0a98aba582eeaebc4541f1154e57ec5a43693345bebda953381a7b75b58adbd29d3f3eb439ad2.jpg",
        price: 50,
    };
    $scope.bag = {
        name: "Laptop Bag",
        image: "https://images-na.ssl-images-amazon.com/images/I/71It%2BLACvgL._SL1100_.jpg",
        price: 45,
    };
    $scope.theArray = [$scope.desktop, $scope.mac, $scope.game, $scope.bag];
    console.log($scope.theArray);

}])
