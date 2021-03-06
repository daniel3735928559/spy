"use strict"
var benv = require('benv');
benv.setup(function(){
    benv.expose({angular:benv.require('./lib/angular/angular.js','angular')});
    var app = angular.module('app', [])
    app.controller("ClController", ['$scope',function($scope){
	$scope.prog = "x = 27\ny = 28\n z= x+y";
	$scope.pycontrol = {};
    }]);
    var parser = require('./spy/expr_node.js').parser;
    require('./spy/sim.js');
    //document.documentElement.innerHTML = "<html><body ng-app='app' ng-controller='ClController'><sim-py text='x = 27' control='pycontrol'></sim-py></body></html>";

    //angular.element(document.body.firstChild).append(spy);

    angular.bootstrap(document, ['app']);
    var $controller = angular.injector(['ng', 'app']).get('$controller');
    var scope = {};
    $controller('PySimController', { $scope: scope });
    scope.program = 'x = 27+1\nwhile(x > 10):\n   x = x-1\n   y = 28\nz= x+y\nz= x+y\nz= x+y\nz= x+y\nz= x+y';
    scope.editor = {
	getValue:function(){return scope.program;},
	setOption:function(){return;},
	addLineClass:function(){return;},
	removeLineClass:function(){return;},
	clearGutter:function(){return;},
	setGutterMarker:function(){return;}
    }
    scope.run()
    scope.p = parser;
    scope.step();
    scope.step();
    scope.step();
    scope.step();
    scope.step();
    scope.step();
    scope.step();
    scope.step();
    scope.step();
    scope.step();
    scope.step();
    scope.step();
    scope.step();
    scope.step();
    scope.step();
    console.log(scope.variables);
    console.log(scope.status);
});
// var path = require('path');
// require(path.join(path.resolve('./'),process.argv[2]))();


