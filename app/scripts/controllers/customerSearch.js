'use strict';

angular.module('app')
    .controller('CustomerSearchController', ['$scope', '$state', 'userService', 'notify', function ($scope, $state, userService, notify) {

        function initialise(){
            $scope.customer = {searchText: '', results: []};
        }

        $scope.searchCustomers = function(){
            $scope.customer.results = [{name: 'Test Customer'}];
        };

        initialise();
    }]);
