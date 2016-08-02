'use strict';

angular.module('app')
    .controller('MainController', ['$scope', function ($scope, $mdSidenav) {

        function initialise(){
            $scope.myProperty = 'A Value';
        }
/*
        $scope.toggleSidenav = function(menuId){
            $mdSidenav(menuId).toggle();
        };
*/
        initialise();
    }]);
