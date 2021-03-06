'use strict';

var simulatorApp = angular.module('simulatorApp',
    [
	'ngRoute',
    'ngResource',
    'ui.bootstrap',

	'carrera.commons',	
    'simulator',
    'replay'
    ]);

simulatorApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/simulator', {
                templateUrl: 'simulator/simulator.html',
                controller: 'simulatorCtrl'
            }).
            when('/replay', {
               templateUrl: 'replay/replay.html',
               controller: 'replayCtrl' 
            }).
            otherwise({
                redirectTo: '/simulator'
            });
    }]);

