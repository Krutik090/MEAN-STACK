/// <reference path="angular.js" />

var studentapp = angular.module("studentmodule",[]).controller("studentcontroller",function($scope){
    $scope.student = [
        {sname:"krutik",sid:"23msit068",course:"mscit",age:23,s1:70,s2:80,s3:90},
        {sname:"vivek",sid:"23msit019",course:"mscit",age:20,s1:56,s2:84,s3:67},
        {sname:"smit",sid:"23msit30",course:"mscit",age:25,s1:46,s2:97,s3:69},
        {sname:"bhavik",sid:"23msit040",course:"mscit",age:21,s1:69,s2:70,s3:60},
        {sname:"devyanshi",sid:"23msit014",course:"mscit",age:22,s1:80,s2:90,s3:100},
    ];
})