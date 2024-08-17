// Define the AngularJS module
var app = angular.module('messageApp', []);

// Define the controller
app.controller('MessageController', function($scope) {
    // Attach a message to the scope
    $scope.message = "Hello, this is a message from the controller!";
});
