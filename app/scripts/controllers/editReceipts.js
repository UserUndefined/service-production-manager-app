'use strict';

angular.module('app')
    .controller('EditReceiptsController', ['$scope', '$state', 'ReceiptApi', 'newReceiptDataService', 'notify', '_', function ($scope, $state, ReceiptApi, newReceiptDataService, notify, _) {

        //$scope.$on('onRepeatLast', function(scope, element, attrs) {
        //    $('.materialboxed').materialbox();
        //});

        function initialise(){
            ReceiptApi.all('receipts').getList().then(function (res) {
                //$scope.allReceipts = res.plain();
                //var filtered = _.filter($scope.allReceipts, function(x){return x.file !== ''});
                //var filtered = _.cloneDeep($scope.allReceipts);
                //_.orderBy(filtered, ['date'], ['desc']);
                $scope.filteredReceipts = res.plain();
            }, function (err) {
                console.error(err.toString());
                notify({ message:'Fetch Receipts Failed', duration:3000, classes:'alert-fail'} );
            });
        }

        initialise();
    }]);
