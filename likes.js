/// <reference path="angular.js" />

var app = angular.module("mymodule",[]).controller("likecontroller", function($scope){

    $scope.posts = [
        {pname:"morning",likes:0,dislikes:0},
        {pname:"Good Morning",likes:0,dislikes:0},
        {pname:"Very Good Morning",likes:0,dislikes:0},
        {pname:"Bad morning",likes:0,dislikes:0}
    ];

    $scope.incrementlike=function(p){
        p.likes++;
    }

     $scope.incrementdislike=function(p){
        p.dislikes++;
    }
});