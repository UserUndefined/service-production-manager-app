'use strict';

angular.module('app')
    .directive('registerDomComponents', function() {
        return {
            restrict: 'A',
            link: function() {
                $('.materialboxed').materialbox();
            }
        }
    });