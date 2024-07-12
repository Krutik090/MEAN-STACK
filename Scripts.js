/// <reference path="angular.js" />

var myapp = angular.module("mymodule", [])
    .controller("mycontroller", function ($scope) {
        $scope.student = {
            name: "krutik",     //demo of model and controller
            course: "Msc-IT",
            gender: "Male",
        }
        // $scope.student = student

        // Expression Binding
        $scope.images = {
            name: "Demo Image",
            i1: "C:\\Users\\kruti\\OneDrive\\Pictures\\demo.png"
        }
    });

//FILTER demo 
var app2 = angular.module("module2", []).controller("controller2", function ($scope) {
    $scope.employees = [
        { name: 'krutik', dob: new Date('october 9,2001'), gender: 'male', salary: 100000 },
        { name: 'bhavik', dob: new Date('october 10,2001'), gender: 'male', salary: 20000 },
        { name: 'deep', dob: new Date('october 11,2001'), gender: 'male', salary: 1000 },
        { name: 'vivek', dob: new Date('september 11,2001'), gender: 'male', salary: 12100000 },
        { name: 'smit', dob: new Date('may 4,2002'), gender: 'male', salary: 16000 },
    ];
    $scope.rowlimit = 3;
});

// Filter orderby 
var app3 = angular.module("module3", []).controller("controller3", function ($scope) {
    $scope.students = [
        { name: 'krutik', course: 'Msc(IT)', semester: 2, rollno: '23msit068' },
        { name: 'bhavik', course: 'Msc(IT)', semester: 3, rollno: '23msit028' },
        { name: 'vivek', course: 'MCA', semester: 4, rollno: '23MCA011' },
        { name: 'smit', course: 'MCA', semester: 1, rollno: '23MCA068' },
        { name: 'deep', course: 'Msc(IT)', semester: 2, rollno: '23msit016' },
    ];

    $scope.sortcol = "name";
    $scope.reversesort = false;

    $scope.sortdata = function (colno) {
        $scope.reversesort = ($scope.sortcol == colno) ? !$scope.reversesort : false;
        $scope.sortcol = colno;
    }

    $scope.getarrowclass = function (colno) {
        if ($scope.sortcol == colno) {
            return $scope.reversesort ? 'arrow-down' : 'arrow-up';
        } 
            return '';
        
    }

});