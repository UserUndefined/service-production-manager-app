'use strict';

angular.module('app')
    .service('newReceiptDataService', [function() {

        var _receipt = {
            file: '',
            description: '',
            project: '',
            price: '',
            receiptDate: new Date(),
            user: '',
            organisation: '',
            canDictate: true
        };

        function resetReceipt(){
            _receipt.file = '';
            _receipt.description = '';
            _receipt.project = '';
            _receipt.price = '';
            _receipt.receiptDate = new Date();
            _receipt.user = '';
            _receipt.organisation = '';
            _receipt.canDictate = true;
        }

        return {
            getReceipt: function () {
                return _receipt;
            },
            newReceipt: function () {
                resetReceipt();
                return _receipt;
            }
        }

    }]);