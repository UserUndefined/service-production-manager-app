'use strict';

angular.module('app')
    .controller('EditReceiptController', ['$scope', '$state', 'newReceiptDataService', 'userService', 'ReceiptApi', 'notify', '$stateParams', function ($scope, $state, newReceiptDataService, userService, ReceiptApi, notify, $stateParams) {

        var defaultDate = new Date();

        function initialise(){
            $scope.receiptId = $stateParams.receiptId;
            getReceipt();
        }

        function getReceipt(){
            ReceiptApi.all('receipts').one($scope.receiptId).get().then(function (res) {
                $scope.receipt = res.plain();
                $scope.receipt.testDate = new Date($scope.receipt.date);
                //$scope.$apply();
            }, function () {
                $scope.receipt = newReceiptDataService.newReceipt();
                $scope.receipt.date = defaultDate.toDateString();
                notify({ message:'Receipt not found', duration:3000, classes:'alert-danger'} );
            });
        }

        $scope.submitReceipt = function(){
            var receipts = ReceiptApi.all('receipt');
            receipts.post($scope.receipt).then(function (res) {
                notify({ message:'Receipt Saved', duration:3000, classes:'alert-success'} );
                $state.go('dashboard');
            },function(response){
                notify({ message:'status: ' + response.status + '; message: ' + response.message, duration:3000, classes:'alert-success'} );
            });
        };

        initialise();
    }]);
