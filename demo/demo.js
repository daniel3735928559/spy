var app = app || angular.module('app', []);

app.controller("BlahController", ['$scope','$timeout',function($scope, $timeout){
    $scope.thingy = "asldaksd";
    $scope.pycontrol = {};
    $scope.show = function(){
	console.log($scope.pycontrol.get_program());
    }
}]);

