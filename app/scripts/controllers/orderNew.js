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
            $scope.areas = [
                {name: 'Aberdeen'},
                {name: 'Bury'},
                {name: 'Canterbury'},
                {name: 'Durham'},
                {name: 'Esher'},
                {name: 'Fulham'},
                {name: 'Great Yarmouth'},
                {name: 'Harrow'},
                {name: 'Islington'}
            ];
            $scope.headings = [
                {name: 'Accountants'},
                {name: 'Builders'},
                {name: 'Candlestick Makers'},
                {name: 'Dentists'},
                {name: 'Fishermen'},
                {name: 'Plumbers'}
            ];
            $scope.newItem = {};
        }

        $scope.submitOrderNew = function(){
            $state.go('dashboard');
        };

        $scope.addNewService = function(){
            $scope.order.services.push($scope.newItem);
            $scope.newItem = {};
        };

        initialise();
    }]);
