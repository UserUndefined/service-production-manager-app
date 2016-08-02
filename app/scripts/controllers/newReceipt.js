'use strict';

angular.module('app')
    .controller('NewReceiptController', ['$scope', '$state', 'newReceiptDataService', 'userService', 'ReceiptApi', 'notify', function ($scope, $state, newReceiptDataService, userService, ReceiptApi, notify) {

        function initialise(){
            $scope.receipt = newReceiptDataService.newReceipt();
            getReceiptsCategories();
        }

        function getReceiptsCategories(){
            ReceiptApi.all('receipts').all('categories').getList().then(function (res) {
                $scope.categories = res.plain();
            }, function () {
                notify({ message:'Receipt categories not found', duration:3000, classes:'alert-danger'} );
            });
        }

        $scope.submitReceipt = function(){
            var reader = new FileReader();
            reader.onloadend = function () {
                $scope.receipt.file = reader.result;
                postRecipt();
            };
            reader.readAsDataURL($scope.files[0].lfFile);
        };

        function postRecipt(){
            var receipts = ReceiptApi.all('receipt');
            receipts.post($scope.receipt).then(function (res) {
                notify({ message:'Receipt Saved', duration:3000, classes:'alert-success'} );
                $state.go('dashboard');
            },function(response){
                notify({ message:'status: ' + response.status + '; message: ' + response.message, duration:3000, classes:'alert-success'} );
            });
        }

        initialise();
    }]);
