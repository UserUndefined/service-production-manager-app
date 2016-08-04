'use strict';

angular.module('app')
    .controller('OrderNewController', ['$scope', '$state', 'userService', 'notify', function ($scope, $state, userService, notify) {

        var orderItemIndex = 0;

        function initialise(){
            $scope.order = {
                customer: {
                    name: 'Test Customer',
                    postcode: 'TE5 T01'
                },
                //services: [{area:'test', heading:'test2', product: {name: 'Website', price: 250, options: {icon: 'web'}}}],
                services: [],
                totalValue: 0
            };
            $scope.newItem = {itemIndex: orderItemIndex};
            $scope.serviceProducts = [
                {product: {name: 'Website', price: 250, options: {icon: 'web'}}},
                {product: {name: 'SEO', price: 200, options: {icon: 'find_in_page'}}},
                {product: {name: 'Pay Per Click', price: 150, options: {icon: 'mouse'}}}
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
        }

        $scope.submitOrderNew = function(){
            $state.go('dashboard');
        };

        $scope.addNewService = function(){
            $scope.order.services.push($scope.newItem);
            orderItemIndex++;
            calculateOrderValue();
            $scope.newItem = {itemIndex: orderItemIndex};
        };

        $scope.removeService = function(item){
            var index = $scope.order.services.indexOf(item);
            $scope.order.services.splice(index,1);
            orderItemIndex++;
            calculateOrderValue();
            $scope.newItem = {itemIndex: orderItemIndex};
        };

        function calculateOrderValue() {
            $scope.order.totalValue = _.sumBy($scope.order.services, function(service) { return service.product.price; });
        }

        initialise();
    }]);
