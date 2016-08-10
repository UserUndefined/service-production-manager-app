'use strict';

angular.module('app')
    .directive('activeSideNav', function() {
        return {
            scope: false,
            restrict: 'A',
            controller: function($scope, $mdSidenav, $state){
                $scope.toggleSidenav = function(menuId){
                    $mdSidenav(menuId).toggle();
                };
                $scope.menu = [
                    {
                        link : 'dashboard',
                        title: 'Dashboard',
                        icon: 'dashboard'
                    },
                    {
                        link : 'customerNew',
                        title: 'New Customer',
                        icon: 'group'
                    },
                    {
                        link : 'orderNew',
                        title: 'New Order',
                        icon: 'group'
                    },
                    {
                        link : 'customerSearch',
                        title: 'Customer Search',
                        icon: 'message'
                    }
                ];
                $scope.openPage = function(menuItem){
                    $state.go(menuItem.link);
                }
            }
        };
    });

