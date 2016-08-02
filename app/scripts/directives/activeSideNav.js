'use strict';

angular.module('app')
    .directive('activeSideNav', function() {
        return {
            scope: false,
            restrict: 'A',
            controller: function($scope, $mdSidenav){
                $scope.toggleSidenav = function(menuId){
                    $mdSidenav(menuId).toggle();
                };
            }
        };
    });

