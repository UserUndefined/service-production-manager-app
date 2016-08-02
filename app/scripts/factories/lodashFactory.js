'use strict';

angular.module('app')
    .factory('_', ['$window', '$state', function($window, $state) {

        if(!$window._){
            $state.go('login');
        }
        return $window._;

    }]);