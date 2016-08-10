'use strict';

angular.module('app')
    .controller('DashboardController', ['$scope', '$state', 'ReceiptApi', 'notify', function ($scope, $state, ReceiptApi, notify) {

        function initialise(){
            $scope.stats = {
                receiptsLastSevenDays: 5,
                receiptsLastMonth: 23
            };

            $scope.weekOrdersConfig = {
                options: {
                    chart: {type: 'line'},
                    tooltip: {style: {padding: 10,fontWeight: 'bold'}
                    }
                },
                series: [{
                    name: 'Number of Orders',
                    data: [10, 15, 12, 8, 7, 0, 0],
                    color: '#0675c2'
                }],
                title: {text: 'Orders Per Day'},
                loading: false,
                xAxis: {
                    tickColor: '#fff',
                    title: {text: 'Day'},
                    categories: [
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat',
                        'Sun']
                },
                labels: {
                    formatter: function () {
                        return "<a ng-click='xLabelClick()'>" + this.value + "</a>";
                    },
                    useHTML: true
                },
                legend: {y: 5},
                useHighStocks: false
            };

            $scope.statusCountConfig = {
                options: {
                    chart: {type: 'pie'},
                    tooltip: {style: {padding: 10,fontWeight: 'bold'}}},
                series: [{
                    name: 'Status',
                    colorByPoint: true,
                    data: [{
                        name: 'Pending',
                        y: 10
                    }, {
                        name: 'SEO Production',
                        y: 8
                    }, {
                        name: 'Website Production',
                        y: 6
                    }, {
                        name: 'On Hold',
                        y: 5
                    }, {
                        name: 'Fault',
                        y: 1
                    }, {
                        name: 'Back to Rep',
                        y: 2
                    }, {
                        name: 'Complete',
                        y: 25
                    }]}],
                title: {text: 'Production Status'},
                loading: false,
                xAxis: {
                    tickColor: '#fff',
                    title: {text: 'Day'},
                    categories: [
                        'Pending',
                        'Seo Production',
                        'Website Production',
                        'On Hold',
                        'Fault',
                        'Back to Rep',
                        'Complete']
                },
                labels: {
                    formatter: function () {
                        return "<a ng-click='xLabelClick()'>" + this.value + "</a>";
                    },
                    useHTML: true
                },
                legend: {y: 5},
                useHighStocks: false
            };
        }

        $scope.navigateToList = function(){
            $state.go('editReceipts');
        };

        initialise();

    }]);
