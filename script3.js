/**
 * Created by Sheeba on 2/27/2017.
 */
/*var app = angular.module('myApp', []);
app.controller('q4Controller', function($scope, $http) {
    $http.get("\ teachersData.json").then(function (response) {
     $scope.myData = response.data.records;

});*/


(function(angular) {
    'use strict';
    angular.module('switchExample', ['ngAnimate'])
        .controller('q5Controller', ['$scope', function($scope) {
            $scope.items = ['settings', 'home', 'options', 'other'];
            $scope.selection = $scope.items[0];
        }]);
})(window.angular);
