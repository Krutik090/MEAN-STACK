/// <reference path="angular.js" />

var app = angular.module("cmodule",[]).controller('currencycontroller', function($scope){
        // Define exchange rates
        const rates = {
          'USD': { 'USD': 1, 'EUR': 0.85, 'INR': 74.57 },
          'EUR': { 'USD': 1.18, 'EUR': 1, 'INR': 88.03 },
          'INR': { 'USD': 0.013, 'EUR': 0.011, 'INR': 1 }
        };
        $scope.amount = 1;
        $scope.fromcr = 'USD';
        $scope.tocr = 'INR';
        // Conversion logic
        $scope.convert = function(){
          if ($scope.amount && $scope.fromcr && $scope.tocr) {
            $scope.convertedamt = $scope.amount * rates[$scope.fromcr][$scope.tocr];
          } else {
            $scope.convertedamt = 0;
          }
        };
      });
