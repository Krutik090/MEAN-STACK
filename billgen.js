/// <reference path="angular.js" />

var app = angular.module("mymodule", []).controller("Billcontroller", function ($scope) {
    $scope.items = [
        { name: "laptop", price: 30000 },
        { name: "Pendrive", price: 400 },
        { name: "HD", price: 6000 },
        { name: "Mouse", price: 200 },
        { name: "KB", price: 300 }
    ];

    $scope.selecteditem = $scope.items[0];
    $scope.quantity = 1;
    $scope.billitems = [];
    $scope.totalBill=0;
    $scope.additem = function()
    {
        var item = {
            name : $scope.selecteditem.name,
            price : $scope.selecteditem.price,
            quantity : $scope.quantity,
        };

        $scope.billitems.push(item);
        $scope.totalBill = $scope.totalBill + ($scope.selecteditem.price * $scope.quantity);
        // $scope.cal();
    };

    // $scope.cal = function(){
    //     $scope.total = 0;
    //     for (var i = 0; i < $scope.billitems.length; i++) {
    //         $scope.total += $scope.billitems[i].price * $scope.billitems[i].quantity;
    //     }
    // }
});