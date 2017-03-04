/**
 * Created by Sheeba on 2/27/2017.
 */
var app = angular.module('myApp', []);
app.controller('studentController', function($scope, $http) {
    $http.get("\student.json").then(function (response) {
        $scope.myData = response.data.records;
    });
});
