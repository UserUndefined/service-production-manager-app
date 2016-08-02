'use strict';

angular.module('app')
    .controller('OrderNewController', ['$scope', '$state', 'userService', 'notify', function ($scope, $state, userService, notify) {

        function initialise(){
            $scope.order = {
                customer: {
                    name: 'Test Customer',
                    postcode: 'TE5 T01'
                },
                services: [
                    {
                        name: 'Website',
                        area: 'Aberdeen',
                        heading: 'Builders'
                    },
                    {
                        name: 'SEO',
                        area: 'Aberdeen',
                        heading: 'Builders'
                    },
                    {
                        name: 'Pay Per Click',
                        area: 'Aberdeen',
                        heading: 'Builders'
                    }
                ]
            };
            $scope.services = [
                {name: 'Website'},
                {name: 'SEO'},
                {name: 'Pay Per Click'}
            ];
        }

        $scope.submitOrderNew = function(){
            $state.go('dashboard');
        };

        initialise();
    }]);
