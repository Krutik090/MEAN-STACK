
// app.js

// Define the AngularJS application module
var app = angular.module('studentApp', []);

// Define the controller
app.controller('studentController', function($scope) {
    // Store model data as studentInfo
    $scope.students = [
        {sName: 'John Doe', sID: 'S101', course: 'Math', subject1: 85, subject2: 78, subject3: 92},
        {sName: 'Jane Smith', sID: 'S102', course: 'Science', subject1: 48, subject2: 65, subject3: 72},
        {sName: 'Alice Johnson', sID: 'S103', course: 'History', subject1: 90, subject2: 88, subject3: 84}
    ];

    // Function to calculate total, percentage, and grade
    $scope.calculateResults = function() {
        angular.forEach($scope.students, function(student) {
            student.total = student.subject1 + student.subject2 + student.subject3;
            student.percentage = student.total / 3;
            if (student.percentage >= 90) student.grade = 'AA';
            else if (student.percentage >= 80) student.grade = 'AB';
            else if (student.percentage >= 70) student.grade = 'BB';
            else if (student.percentage >= 60) student.grade = 'BC';
            else if (student.percentage >= 50) student.grade = 'CC';
            else if (student.percentage >= 40) student.grade = 'CD';
            else if (student.percentage >= 30) student.grade = 'DD';
            else student.grade = 'FF';
        });
    };

    // Calculate results on load
    $scope.calculateResults();

    // Function to filter student by selected ID
    $scope.filterStudent = function() {
        $scope.filteredStudent = $scope.students.filter(student => student.sID === $scope.selectedStudentID);
    };

    // Function to display result
    $scope.displayResult = function() {
        $scope.filterStudent();
    };
});
