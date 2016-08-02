angular.module('app', ['appTemplates', 'ui.router', 'config', 'restangular', 'angularSpinner', 'cgNotify', 'ipCookie', 'ngFileSaver','ngMaterial', 'lfNgMdFileInput'])

    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$stateChangeError', function () {
            $state.transitionTo('login');
        });
    }])

    .config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider',
        function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

            var dashboardView = {
                    url: '/',
                    templateUrl: 'views/dashboard.html',
                    controller: 'DashboardController',
                    resolve: {
                        authentication: ['userService', '$q', function (userService, $q) {
                            var defer = $q.defer();
                            userService.isLoggedIn().then(function (loggedIn) {
                                if (loggedIn) {
                                    defer.resolve(true);
                                } else {
                                    defer.reject();
                                }
                            });
                            return defer.promise;
                        }]
                    }
                },
                loginView = {
                    url: '/login',
                    templateUrl: 'views/login.html',
                    controller: 'LoginController'
                },
                customerNewView = {
                    url: '/customer/new',
                    templateUrl: 'views/customerNew.html',
                    controller: 'CustomerNewController',
                    resolve: {
                        authentication: ['userService', '$q', function (userService, $q) {
                            var defer = $q.defer();
                            userService.isLoggedIn().then(function (loggedIn) {
                                if (loggedIn) {
                                    defer.resolve(true);
                                } else {
                                    defer.reject();
                                }
                            });
                            return defer.promise;
                        }]
                    }
                },
                orderNewView = {
                    url: '/customer/order/new',
                    templateUrl: 'views/orderNew.html',
                    controller: 'OrderNewController',
                    resolve: {
                        authentication: ['userService', '$q', function (userService, $q) {
                            var defer = $q.defer();
                            userService.isLoggedIn().then(function (loggedIn) {
                                if (loggedIn) {
                                    defer.resolve(true);
                                } else {
                                    defer.reject();
                                }
                            });
                            return defer.promise;
                        }]
                    }
                },
                mainView = {
                    url: '/main',
                    templateUrl: 'views/main.html',
                    controller: 'MainController'
                    },
                captureReceiptView = {
                    url: '/capture',
                    templateUrl: 'views/captureReceipt.html',
                    controller: 'CaptureReceiptController'
                },
                newReceiptView = {
                    url: '/new',
                    templateUrl: 'views/newReceipt.html',
                    controller: 'NewReceiptController',
                    resolve: {
                        authentication: ['userService', '$q', function (userService, $q) {
                            var defer = $q.defer();
                            userService.isLoggedIn().then(function (loggedIn) {
                                if (loggedIn) {
                                    defer.resolve(true);
                                } else {
                                    defer.reject();
                                }
                            });
                            return defer.promise;
                        }]
                    }
                },
                editReceiptsView = {
                    url: '/list',
                    templateUrl: 'views/editReceipts.html',
                    controller: 'EditReceiptsController',
                    resolve: {
                        authentication: ['userService', '$q', function (userService, $q) {
                            var defer = $q.defer();
                            userService.isLoggedIn().then(function (loggedIn) {
                                if (loggedIn) {
                                    defer.resolve(true);
                                } else {
                                    defer.reject();
                                }
                            });
                            return defer.promise;
                        }]
                    }
                },
                editReceiptView = {
                    url: '/receipt/:receiptId',
                    templateUrl: 'views/editReceipt.html',
                    controller: 'EditReceiptController',
                    resolve: {
                        authentication: ['userService', '$q', function (userService, $q) {
                            var defer = $q.defer();
                            userService.isLoggedIn().then(function (loggedIn) {
                                if (loggedIn) {
                                    defer.resolve(true);
                                } else {
                                    defer.reject();
                                }
                            });
                            return defer.promise;
                        }]
                    }
                },
                exportView = {
                    url: '/export',
                    templateUrl: 'views/export.html',
                    controller: 'ExportController',
                    resolve: {
                        authentication: ['userService', '$q', function (userService, $q) {
                            var defer = $q.defer();
                            userService.isLoggedIn().then(function (loggedIn) {
                                if (loggedIn) {
                                    defer.resolve(true);
                                } else {
                                    defer.reject();
                                }
                            });
                            return defer.promise;
                        }]
                    }
                },
                newNotesView = {
                    url: '/new',
                    templateUrl: 'views/newNotes.html',
                    controller: 'NewNotesController'
                },
                editNotesView = {
                    url: '/new',
                    templateUrl: 'views/editNotes.html',
                    controller: 'EditNotesController'
                },
                directivesExamplesView = {
                    url: '/directives',
                    templateUrl: 'views/directiveExamples.html',
                    controller: 'directiveExamplesController'
                },
                formValidationExampleView = {
                    url: '/forms',
                    templateUrl: 'views/formValidation.html',
                    controller: 'formValidationExampleController'
                };

            $stateProvider

                .state('dashboard', dashboardView)
                .state('login', loginView)
                .state('customerNew', customerNewView)
                .state('orderNew', orderNewView)
            .state('main', mainView)
            .state('captureReceipt', captureReceiptView)
            .state('newReceipt', newReceiptView)
            .state('export', exportView)
            .state('newNotes', newNotesView)
            .state('editNotes', editNotesView)
            .state('editReceipt', editReceiptView)
            .state('editReceipts', editReceiptsView)
            .state('directivesExamples', directivesExamplesView)
            .state('formValidationExample', formValidationExampleView);

            $urlRouterProvider.otherwise('/');

            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('pink');

        }]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
    //$('.button-collapse').sideNav();
    //$('select').material_select();
    //$(".dropdown-button").dropdown();
    //$('.materialboxed').materialbox();
    //$('.button-collapse').sideNav({
    //    menuWidth: 240, // Default is 240
    //    edge: 'left', // Choose the horizontal origin
    //    closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
    //});
    //$('.datepicker').pickadate({
    //    selectMonths: true, // Creates a dropdown to control month
    //    selectYears: 15, // Creates a dropdown of 15 years to control year
    //    format: 'dd mmm yyyy'
    //});
});
