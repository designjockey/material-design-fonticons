'use strict';

angular.module('mdfi.icons', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/icons', {
            templateUrl: 'app/icons/icons.html',
            controller: 'IconsCtrl'
        });
    }])
    .factory('icons', function($q, $timeout, $http){
        var Icons = {
            fetch: function(){
                var deferred = $q.defer();

                $timeout(function(){
                    $http.get('json/icon_class_names.json').success(function(data){
                        deferred.resolve(data);
                    });
                }, 100);

                return deferred.promise;
            }
        };

        return Icons;
    })
    .controller('IconsCtrl', ['$scope', 'icons', function($scope, icons) {

        icons.fetch().then(function(data){
           $scope.icondata = data;
        });

    }]);