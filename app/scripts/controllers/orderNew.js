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
                        heading: 'Builders',
                        options: {
                            offset: true,
                            actionIcon: 'mdi:access-point',
                            icon: 'mdi:earth',
                            avatarIcon: true
                        }
                    },
                    {
                        name: 'SEO',
                        area: 'Aberdeen',
                        heading: 'Builders',
                        options: {
                            offset: true,
                            actionIcon: 'content:clear',
                            face : '/images/browser.svg',
                            avatarIcon: true
                        }
                    },
                    {
                        name: 'Pay Per Click',
                        area: 'Aberdeen',
                        heading: 'Builders',
                        options: {
                            offset: true,
                            actionIcon: 'content:add_circle',
                            face : '/images/browser.svg',
                            avatarIcon: true
                        }
                    }
                ]
            };
            $scope.services = [
                {name: 'Website', icon: 'communication:phone'},
                {name: 'SEO', icon: 'communication:phone'},
                {name: 'Pay Per Click', icon: 'communication:phone'}
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
