(function () {
    'use strict';

    angular.module('app')
        .directive('selectOption', materialSelect);
    materialSelect.$inject = ['$timeout'];

    function materialSelect($timeout) {
        var directive = {
            link: link,
            restrict: 'A',
            require: '?ngModel'
        };

        function link(scope, element, attrs, ngModel) {
            $timeout(create);

            if (ngModel) {
                ngModel.$render = create;
            }

            function create() {
                element.material_select();
            }

            //if using materialize v0.96.0 use this
            element.one('$destroy', function () {
                element.material_select('destroy');
            });
        }

        return directive;
    }

})();