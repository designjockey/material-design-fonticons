'use strict';

// Declare app level module which depends on views, and components
angular.module('mdfi', [
    'ngRoute',
    'mdfi.icons'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/icons'});
    }]);