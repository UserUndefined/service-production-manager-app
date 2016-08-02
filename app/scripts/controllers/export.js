'use strict';

angular.module('app')
    .controller('ExportController', ['$scope', '$state', 'notify', 'ReceiptApi', 'FileSaver', 'Blob', function ($scope, $state, notify, ReceiptApi, FileSaver, Blob) {

        function initialise(){
        }

        $scope.downloadCsvData = function() {
            ReceiptApi.all('receipts/summary').getList().then(function (res) {
                var json = JSON.stringify(res.plain());
                var data = new Blob([json], { type: 'application/json' });
                FileSaver.saveAs(data, 'text.txt');
            },function(response){
                notify({ message:'status: ' + response.status + '; message: ' + response.message, duration:3000, classes:'alert-success'} );
            });
        };

        initialise();
    }]);
