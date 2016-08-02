'use strict';

angular.module('app')
    .controller('NavigationController', ['$scope, $timeout, $mdSidenav, $log', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });

        };
    }]);
