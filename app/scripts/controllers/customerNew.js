'use strict';

angular.module('app')
    .controller('CustomerNewController', ['$scope', '$state', 'userService', 'notify', function ($scope, $state, userService, notify) {

        function initialise(){
            $scope.customer = {};
            $scope.categories = [
                {name: 'Accountant'},
                {name: 'Builder'},
                {name: 'Child Minder'},
                {name: 'Developer'},
                {name: 'Electrician'},
                {name: 'Fisherman'},
                {name: 'Housing Inspector'},
                {name: 'Plumber'},
                {name: 'Yacht Builder'},
                {name: 'Zoo Keeper'}
            ];
        }

        $scope.submitCustomerNew = function(){
            $state.go('dashboard');
        };

        initialise();
    }]);
