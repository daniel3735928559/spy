var app = angular.module('app',['ngCookies']);

app.controller("PyExplController", ['$scope','$http','$cookies', '$window', '$timeout', function($scope, $http, $cookies, $window, $timeout){
    $cookies.put('cookie','pbj');
    $scope.problems = []
    $scope.current_problem = 0;
    $scope.setup = function(){
	$scope.problems.push({"type":"python",
			      "id":"1"
			      "text":"Write a Python program",
			      "program":"",
			      "win_condition":{}
			     });
	$scope.solutions = [];
    }
    $scope.setup();
}]);

