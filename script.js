/**
 * Created by Sheeba on 2/27/2017.
 */
var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when("/question1", {
            templateUrl: "home.html",
            controller: 'myController'
        })
        .when("/about", {
            templateUrl: "about.html",
            controller: 'studentController'
        })
        .when("/contact", {
            templateUrl: "contact.html",
            controller: 'contactController'
        })
    .when("/ques4", {
        templateUrl: "ques4.html",
        controller: 'q4Controller'
    })
        .when("/ques5", {
            templateUrl: "ques5.html",
            controller: 'q5Controller'
        })
        .when("/ques6", {
        templateUrl: "ques6.html",
        controller: 'q6Controller'
    })
        .when("/ques7", {
            templateUrl: "ques7.html",
            controller: 'q7Controller'
        })
        .when("/ques8", {
            templateUrl: "ques8.html",
            controller: 'q8Controller'
        })
    .when("/ques9", {
        templateUrl: "ques9.html",
        controller: 'q9Controller'
    })
        .when("/ques10", {
            templateUrl: "ques10.html",
            controller: 'q10Controller'
        })
    .when("/thanks", {
        templateUrl: "thanks.html",
        controller: 'thanksController'
    })
    .when("/welcome", {
        templateUrl: "welcome.html",
        controller: 'welcomeController'
    });

});

app.controller('myController', function($scope) {
    $scope.message = "This is homepage";
});
app.controller('studentController', function($scope) {
    $scope.message = "This is about page";
});
app.controller('contactController', function($scope) {
    $scope.message = "This is contact page";
});
app.controller('q4Controller', function($scope) {
    $scope.message = "This is question4 page";
});
app.controller('q5Controller', function($scope) {
    $scope.message = "This is question5 page";
});
app.controller('q6Controller', function($scope) {
    $scope.message = "This is question6 page";
});
app.controller('q7Controller', function($scope) {
    $scope.message = "This is question7 page";
});
app.controller('q8Controller', function($scope) {
    $scope.message = "This is question8 page";
});
app.controller('q9Controller', function($scope) {
    $scope.message = "This is question9 page";
});
app.controller('q10Controller', function($scope) {
    $scope.message = "This is question10 page";
});
app.controller('thanksController', function($scope) {
    $scope.message = "This is thanks page";
});
app.controller('welcomeController', function($scope) {
    $scope.message = "This is welcome page";
});
 /*
app.controller('studentController', function($scope, $http) {
    $http.get("\studentData.json").then(function (response) {
        $scope.myData = response.data.records;
    });
});


app.controller('contactController', function($scope) {
    $scope.studentList = [{studentText:'Mary Ann', done:false}];

    $scope.studentAdd = function() {
        $scope.studentList.push({studentText:$scope.studentInput, done:false});
        $scope.studentInput = "";
    };

    $scope.remove = function() {
        var oldstudentList = $scope.studentList;
        $scope.studentList = [];
        angular.forEach(oldstudentList, function(x) {
            if (!x.done) $scope.studentList.push(x);
        });
    };
});

app.controller('myController', function($scope, $http) {
    $http.get("\ teachersData.json").then(function (response) {
        $scope.myData = response.data.records;
    });
});*/
