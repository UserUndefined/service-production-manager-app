'use strict';

angular.module('app')
    .controller('DashboardController', ['$scope', '$state', 'ReceiptApi', 'notify', function ($scope, $state, ReceiptApi, notify) {

        function initialise(){
            $scope.stats = {
                receiptsLastSevenDays: 5,
                receiptsLastMonth: 23
            };
        }

        $scope.navigateToList = function(){
            $state.go('editReceipts');
        };

        initialise();

    }]);
