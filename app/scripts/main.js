"use strict";
 angular.module('config', [])

.constant('RECEIPT_API_URL', 'https://generic-receiver-api.herokuapp.com/')

;;angular.module('appTemplates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("views/captureReceipt.html",
    "<div class=container><div class=row></div><div class=row><div class=\"file-field input-field col s12\"><div class=\"waves-effect waves-light btn\"><span>Capture Receipt</span> <input type=file accept=image/* capture=camera id=receiptFile onchange=angular.element(this).scope().receiptFileChangeEventHandler(this.files)></div></div></div><div class=row ng-if=\"receiptFile !== ''\"><div class=\"col s5\"><img class=receiptPreview ng-src=\"{{receiptFile}}\"></div></div><div class=row><div class=\"input-field col s12\"><button class=\"waves-effect waves-light btn\" ng-click=startDictation()>Dictate Notes</button></div></div><div class=row><div class=\"input-field col s12\"><textarea class=\"materialize-textarea validate\" type=text id=transcript ng-model=transcript></textarea><label class=active for=transcript>Notes</label></div></div><div class=row><div class=\"input-field col s6\"><input id=receiptDate class=validate ng-model=createdDate><label class=active for=receiptDate>Receipt Date</label></div><div class=\"input-field col s6\"><input id=receiptValue class=validate ng-model=claimValue><label class=active for=receiptValue>Claim Value</label></div></div><div class=row><div class=\"input-field col s12\"><input class=validate id=projectName ng-model=project><label class=active for=projectName>Project</label></div></div><div class=row><div class=\"input-field col s6\"><button class=\"waves-effect waves-light btn\" ng-click=submitReceipt() ng-if=!receiptInvalid>Save Receipt</button> <button class=\"disabled btn\" ng-click=submitReceipt() ng-if=receiptInvalid>Save Receipt</button></div></div><div ng-if=receiptSubmitted class=row><div class=\"col s12\"><div class=\"input-field col s12\"><p>Receipt Submitted</p></div></div></div></div>");
  $templateCache.put("views/customerNew.html",
    "<md-content layout=row layout-align=center><div layout-fill flex-gt-xs=66><div layout-align=center><form name=customerNewForm layout=column><md-input-container class=md-block><label>Name</label><input name=customerName class=validate required ng-model=customer.name><div ng-messages=customerNewForm.customerName.$error><div ng-message=required>You must supply a company name.</div></div></md-input-container><md-input-container class=md-block><label>Address Line 1</label><input name=customerAddress1 class=validate required ng-model=customer.address1><div ng-messages=customerNewForm.customerAddress1.$error><div ng-message=required>You must supply a first line address.</div></div></md-input-container><md-input-container class=md-block><label>Address Line 2</label><input class=validate ng-model=customer.address2></md-input-container><md-input-container class=md-block><label>Town</label><input class=validate ng-model=customer.town></md-input-container><md-input-container class=md-block><label>County</label><input class=validate ng-model=customer.county></md-input-container><md-input-container class=md-block><label>Postcode</label><input name=customerPostcode class=validate required ng-model=customer.postcode><div ng-messages=customerNewForm.customerPostcode.$error><div ng-message=required>You must supply a postcode.</div><div ng-message=pattern>Invalid postcode.</div></div></md-input-container><md-input-container class=md-block><label>Telephone</label><input name=customerTelephone type=tel class=validate required ng-model=customer.telephone><div ng-messages=customerNewForm.customerTelephone.$error><div ng-message=required>You must supply a telephone number.</div><div ng-message=pattern>Invalid telephone number.</div></div></md-input-container><md-input-container class=md-block><label>Email</label><input name=customerEmail type=email class=validate ng-model=customer.email ng-pattern=\"/^.+@.+\\..+$/\"><div ng-messages=customerNewForm.customerEmail.$error><div ng-message=pattern>Invalid email address.</div></div></md-input-container><md-input-container class=md-block><label>Url</label><input name=customerUrl type=url class=validate ng-model=customer.url><div ng-messages=customerNewForm.customerUrl.$error><div ng-message=url>Invalid url.</div></div></md-input-container><md-input-container><md-select ng-model=customer.category placeholder=\"Select a category\"><md-option ng-value=category.name ng-repeat=\"category in categories\">{{ category.name }}</md-option></md-select></md-input-container><md-input-container><label>Notes</label><textarea class=validate type=text ng-model=customer.notes></textarea></md-input-container><md-button ng-click=submitCustomerNew() ng-if=!customerInvalid class=\"md-raised md-primary\">Save Customer</md-button><md-button ng-click=submitCustomerNew() ng-if=customerInvalid ng-disabled=true>Save Customer</md-button></form></div></div></md-content>");
  $templateCache.put("views/dashboard.html",
    "<md-content class=md-padding layout-xs=column layout=row><md-card><img ng-src=images/mouseandpaperwork.jpg class=md-card-image alt=\"Office Desktop\"><md-card-content><p>{{stats.receiptsLastSevenDays}} receipts entered in the last 7 days</p></md-card-content><md-card-actions layout=row layout-align=\"start center\"><md-button ng-click=navigateToList()>View All Receipts</md-button></md-card-actions></md-card><md-card><img ng-src=images/calculatorandpen.jpg class=md-card-image alt=\"Office Desktop Calculator\"><md-card-content><p>{{stats.receiptsLastMonth}} receipts entered in the last month</p></md-card-content><md-card-actions layout=row layout-align=\"start center\"><md-button ng-click=navigateToList()>View All Receipts</md-button></md-card-actions></md-card></md-content>");
  $templateCache.put("views/directiveExamples.html",
    "<h1>AngularJs Custom Directive Examples</h1><p>This page contains a few examples of custom AngularJs directives using different techniques and functionality.</p><p>Here is an inline custom directive displaying a customer name scope property</p><exp-in-line-directive></exp-in-line-directive><p>Here is a custom directive using an HTML template to display all customer details:</p><exp-html-directive></exp-html-directive>");
  $templateCache.put("views/directives/currentUser.html",
    "<i class=material-icons>perm_identity</i>");
  $templateCache.put("views/directives/directiveExampleHtmlTemplate.html",
    "<hr><p><h3>Customer Name:</h3>{{customer.name}}</p><p><h3>Customer Telephone:</h3>{{customer.telephone}}</p><p><h3>Customer Email:</h3>{{customer.email}}</p><hr>");
  $templateCache.put("views/editNotes.html",
    "<div class=\"container col s12 m6 l6 offset-m3 offset-l3\"><div class=row></div><div class=row><div class=\"input-field col s9\"><textarea class=\"materialize-textarea validate\" type=text id=transcript ng-model=receipt.transcript ng-change=parseTranscript() ng-model-options=\"{ debounce: 2000 }\" focus=isTranscriptFocused></textarea><label class=active for=transcript>Notes</label></div><div class=\"input-field col s3\"><img class=\"receiptPreview col s12\" ng-src=\"{{receipt.file}}\"></div></div><div class=row><div class=\"input-field col s6\"><input id=receiptDate class=validate ng-model=receipt.date><label class=active for=receiptDate>Receipt Date</label></div><div class=\"input-field col s6\"><input id=receiptValue class=validate ng-model=receipt.price><label class=active for=receiptValue>Claim Value</label></div></div><div class=row><div class=\"input-field col s12\"><input class=validate id=projectName ng-model=receipt.project><label class=active for=projectName>Project</label></div></div><div class=row><div class=input-field><button class=\"waves-effect waves-light btn col s12\" ng-click=submitReceipt() ng-if=!receiptInvalid>Save Receipt</button> <button class=\"disabled btn col s12\" ng-click=submitReceipt() ng-if=receiptInvalid>Save Receipt</button></div></div><div ng-if=receiptSubmitted class=row><div class=\"input-field col s12\"><a ng-click=navigateToNewReceipt()>New receipt</a></div></div><span us-spinner=\"{radius:20, width:8, length:16}\" spinner-on=showSpinner></span></div>");
  $templateCache.put("views/editReceipt.html",
    "<md-content layout=row layout-align=center><div layout-fill flex-gt-xs=66><div layout=column layout-align=center><md-datepicker md-open-on-focus ng-model=receipt.receiptDate md-placeholder=\"Enter date\"></md-datepicker><md-input-container class=md-block><label>Claim Value</label><input type=number class=validate required ng-model=receipt.price></md-input-container><md-input-container class=md-block><label>Project</label><input class=validate ng-model=receipt.project></md-input-container><md-input-container><md-select ng-model=receipt.category placeholder=\"Select a category\"><md-option ng-value=category.name ng-repeat=\"category in categories\">{{ category.name }}</md-option></md-select></md-input-container><md-input-container><label>Description</label><textarea class=validate type=text ng-model=receipt.description></textarea></md-input-container><lf-ng-md-file-input lf-files=files multiple progress preview lf-maxcount=2 lf-filesize=10MB></lf-ng-md-file-input><md-button ng-click=submitReceipt() ng-if=!receiptInvalid class=\"md-raised md-primary\">Save Receipt</md-button><md-button ng-click=submitReceipt() ng-if=receiptInvalid ng-disabled=true>Save Receipt</md-button></div></div></md-content>");
  $templateCache.put("views/editReceipts.html",
    "<div class=\"list-container col s12 m12 l12\"><ul class=collection><li ng-repeat=\"receipt in filteredReceipts\" class=\"collection-item avatar\"><a ng-href=#/receipt/{{receipt._id}}><div class=list-item-receipt-details><div class=container-item-receipt-thumbnail><img ng-src={{receipt.file}} class=\"img-list-receipts-thumbnail materialboxed\"></div><div class=container-item-receipt-text><i class=\"material-icons circle green\">insert_chart</i> <span class=title>{{receipt.receiptDate | date:'dd MMM yyyy'}}</span><p>{{receipt.project}}<br></p><p ng-if=receipt.price>£{{receipt.price}}</p><br><p>{{receipt.category}}</p></div></div></a></li></ul></div>");
  $templateCache.put("views/export.html",
    "<md-content class=md-padding layout-xs=column layout=row><section layout=row layout-sm=column layout-align=\"center center\" layout-wrap><md-button class=\"md-raised md-primary\" ng-click=downloadCsvData()>Export</md-button></section></md-content>");
  $templateCache.put("views/formValidation.html",
    "<h1>AngularJs Form Validation Example</h1><form novalidate class=simple-form>Name: <input ng-model=user.name required><br>E-mail: <input type=email ng-model=user.email class=validate required><br><input type=button ng-click=reset() value=\"Reset\"> <input type=submit ng-click=update(user) value=\"Save\"></form><pre>user = {{user | json}}</pre><pre>master = {{master | json}}</pre>");
  $templateCache.put("views/login.html",
    "<md-content layout=row layout-align=center><div layout-fill flex-gt-xs=66><form name=loginForm><md-input-container class=md-block><h3>Service Manager Login</h3></md-input-container><md-input-container class=md-block><label>Organisation</label><md-icon md-font-set=material-icons>business</md-icon><input ng-model=user.organisation></md-input-container><md-input-container class=md-block><label>Email Address</label><md-icon md-font-set=material-icons>email</md-icon><input ng-model=user.logon type=email required minlength=10 maxlength=100 ng-pattern=\"/^.+@.+\\..+$/\"></md-input-container><md-input-container class=md-block><label>Password</label><md-icon md-font-set=material-icons>https</md-icon><input ng-model=user.password type=password></md-input-container><md-input-container class=md-block><md-checkbox class=md-secondary ng-model=user.rememberMe>Remember me</md-checkbox></md-input-container><md-button class=\"md-raised md-primary\" ng-click=submitLogon() layout-fill>Login</md-button></form></div></md-content>");
  $templateCache.put("views/main.html",
    "<div class=container><div class=row></div><div class=row><div class=\"col s12\"><div class=\"input-field col s6\"><span>Camera:</span> <input id=image_filepath type=file class=validate accept=image/* capture=camera></div></div></div><div class=row><div class=\"col s12\"><div class=\"input-field col s6\"><span>Microphone #1:</span> <input type=file accept=\"audio/*;capture=microphone\"></div></div></div><div class=row><div class=\"col s12\"><div class=\"input-field col s6\"><span>Microphone #2:</span> <input id=audio_filepath type=file class=validate accept=audio/* capture=microphone></div></div></div><div class=row><div class=\"col s12\"><div class=\"input-field col s6\"><span>Video:</span> <input id=video_filepath type=file class=validate accept=audio/* capture=video></div></div></div><div class=row><div class=\"col s12\"><div class=\"input-field col s6\"><span>Webkit Speech:</span> <input x-webkit-speech></div></div></div><div class=row><div class=\"col s12\"><div class=\"input-field col s12\"><div class=speech><span><input name=q id=transcript placeholder=\"Speak\"> <button class=\"waves-effect waves-light btn\" onclick=startDictation()>Start Recording</button></span></div></div></div></div></div>");
  $templateCache.put("views/newNotes.html",
    "<div class=\"container col s12 m6 l6 offset-m3 offset-l3\"><div class=row></div><div class=row><div class=input-field><button class=\"waves-effect waves-light btn col s12\" ng-click=toggleDictation()><i class=\"material-icons col s1\">mic</i><div class=\"col s10\"><span ng-if=!recording>Start Dictating</span> <span ng-if=recording>Stop Dictating</span></div></button></div></div><div class=row><div><img id=image-test class=\"receiptPreview col s12\" ng-src={{receipt.file}} onload=\"Materialize.fadeInImage('#image-test')\"></div></div></div>");
  $templateCache.put("views/newReceipt.html",
    "<md-content layout=row layout-align=center><div layout-fill flex-gt-xs=66><div layout=column layout-align=center><md-datepicker md-open-on-focus ng-model=receipt.receiptDate md-placeholder=\"Enter date\"></md-datepicker><md-input-container class=md-block><label>Claim Value</label><input type=number class=validate required ng-model=receipt.price></md-input-container><md-input-container class=md-block><label>Project</label><input class=validate ng-model=receipt.project></md-input-container><md-input-container><md-select ng-model=receipt.category placeholder=\"Select a category\"><md-option ng-value=category.name ng-repeat=\"category in categories\">{{ category.name }}</md-option></md-select></md-input-container><md-input-container><label>Description</label><textarea class=validate type=text ng-model=receipt.description></textarea></md-input-container><lf-ng-md-file-input lf-files=files multiple progress preview lf-maxcount=2 lf-filesize=10MB></lf-ng-md-file-input><md-button ng-click=submitReceipt() ng-if=!receiptInvalid class=\"md-raised md-primary\">Save Receipt</md-button><md-button ng-click=submitReceipt() ng-if=receiptInvalid ng-disabled=true>Save Receipt</md-button></div></div></md-content>");
  $templateCache.put("views/orderNew.html",
    "<md-content layout=column layout-align=center><div><p>{{order.customer.name}}, {{order.customer.postcode}}</p></div><md-divider></md-divider><form name=newServiceForm><div layout-gt-xs=row><div flex=30><md-input-container><md-select ng-model=newItem.product placeholder=\"Select a product\"><md-option ng-value=serviceProduct.product ng-repeat=\"serviceProduct in serviceProducts\">{{ serviceProduct.product.name }}</md-option></md-select></md-input-container></div><div flex=30><md-input-container><md-select ng-model=newItem.area placeholder=\"Select an area\"><md-option ng-value=area.name ng-repeat=\"area in areas\">{{ area.name }}</md-option></md-select></md-input-container></div><div flex=30><md-input-container><md-select ng-model=newItem.heading placeholder=\"Select a heading\"><md-option ng-value=heading.name ng-repeat=\"heading in headings\">{{ heading.name }}</md-option></md-select></md-input-container></div><div flex=10><md-input-container><div><ng-md-icon icon=add_circle size=36 ng-click=addNewService()></ng-md-icon></div></md-input-container></div></div></form><md-divider ng-if=\"order.totalValue > 0\"></md-divider><div layout=column layout-fill><md-list><md-list-item class=\"md-3-line noright\" ng-repeat=\"service in order.services\"><ng-md-icon icon={{service.product.options.icon}} size=36 ng-click=removeService(service)></ng-md-icon><div class=md-list-item-text ng-class=\"{'md-offset': service.options.offset }\"><h3>{{ service.product.name }}</h3><p>{{ service.heading }}</p><p>{{ service.area }}</p></div><div class=md-secondary><p>£{{service.product.price}}</p><ng-md-icon icon=clear size=36 ng-click=removeService(service) style=fill:pink></ng-md-icon></div></md-list-item></md-list><md-divider></md-divider><div layout=row layout-align=end><div flex=50></div><div flex=25><p>Total:</p></div><div flex=nogrow><p>£{{order.totalValue}}</p></div></div><md-divider></md-divider><md-button ng-disabled=\"order.totalValue == 0\" class=\"md-raised md-primary\">Save Order</md-button></div></md-content>");
}]);
;angular.module('app', ['appTemplates', 'ui.router', 'config', 'restangular', 'angularSpinner', 'cgNotify', 'ipCookie', 'ngFileSaver','ngMaterial', 'lfNgMdFileInput', 'ngMessages', 'ngMdIcons'])

    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$stateChangeError', function () {
            $state.transitionTo('login');
        });
    }])

    .config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$mdIconProvider',
        function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {

            $mdIconProvider
                .iconSet('mdi', 'images/mdi.svg')
                .iconSet('content', 'images/content.svg');

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
;'use strict';

angular.module('app')
    .controller('CaptureReceiptController', ['$scope', 'ReceiptApi', 'transcriptParser', function ($scope, ReceiptApi, transcriptParser) {

        function initialise(){
            $scope.transcript = '';
            $scope.receiptFile = '';
            $scope.createdDate = '';
            $scope.project = '';
            $scope.claimValue = '';
            $scope.receiptSubmitted = false;
            $scope.receiptInvalid = true;
        }

        $scope.submitReceipt = function(){
            console.info($scope.transcript);
            console.info($scope.receiptFile);
            var payload = {};
            payload.transcript = $scope.transcript;
            payload.receiptFile = $scope.receiptFile;
            ReceiptApi.all('receiver').post(payload).then(function(){
                console.log('it worked!');
                $scope.receiptSubmitted = true;
            })
        };

        $scope.startDictation = function() {

            $scope.receiptSubmitted = false;

            if (window.hasOwnProperty('webkitSpeechRecognition')) {

                var recognition = new webkitSpeechRecognition();

                recognition.continuous = false;
                recognition.interimResults = false;

                recognition.lang = "en-US";
                recognition.start();

                recognition.onresult = function(e) {
                    document.getElementById('transcript').value
                        = e.results[0][0].transcript;
                    $scope.transcript = e.results[0][0].transcript;
                    $scope.project = transcriptParser.parseProject(e.results[0][0].transcript);
                    $scope.$apply();
                    recognition.stop();
                    //document.getElementById('labnol').submit();
                };

                recognition.onerror = function(e) {
                    recognition.stop();
                }
                recognition.onstart = function(event){
                    //console.log('Dictation started');
                }

                recognition.onend = function(){
                    //console.log('Dictation ended');
                }
            }
        };

        $scope.receiptFileChangeEventHandler = function(files){
            console.log('event handles');
            var file = files[0];
            var reader = new FileReader();
            reader.onload = function(event) {
                $scope.receiptFile = event.target.result;
                $scope.receiptInvalid = false;
                $scope.$apply();
            };
            reader.readAsDataURL(file);
        };

        initialise();
    }]);
;'use strict';

angular.module('app')
    .controller('CustomerNewController', ['$scope', '$state', 'userService', 'notify', function ($scope, $state, userService, notify) {

        function initialise(){
            $scope.customer = {};
            $scope.categories = [
                {name: 'Accountant'},
                {name: 'Builder'},
                {name: 'Child Minder'},
                {name: 'Developer'},
                {name: 'Electrician'},
                {name: 'Fisherman'},
                {name: 'Housing Inspector'},
                {name: 'Plumber'},
                {name: 'Yacht Builder'},
                {name: 'Zoo Keeper'}
            ];
        }

        $scope.submitCustomerNew = function(){
            $state.go('dashboard');
        };

        initialise();
    }]);
;'use strict';

angular.module('app')
    .controller('DashboardController', ['$scope', '$state', 'ReceiptApi', 'notify', function ($scope, $state, ReceiptApi, notify) {

        function initialise(){
            $scope.stats = {
                receiptsLastSevenDays: 5,
                receiptsLastMonth: 23
            };
        }

        $scope.navigateToList = function(){
            $state.go('editReceipts');
        };

        initialise();

    }]);
;'use strict';

angular.module('app')
    .controller('directiveExamplesController', ['$scope', function($scope){

        function initialise(){
            $scope.customer = {name: 'A A Taxis', id: 12345, telephone: '0208 555 555', email: 'info@taxis.com'};
        }

        initialise();
    }]);;'use strict';

angular.module('app')
    .controller('EditNotesController', ['$scope', '$state', 'ReceiptApi', 'newReceiptDataService', 'notify', 'transcriptParser', function ($scope, $state, ReceiptApi, newReceiptDataService, notify, transcriptParser) {

        function initialise(){
            $scope.receipt = newReceiptDataService.getReceipt();
            $scope.showSpinner = false;
            $scope.receiptSubmitted = false;
            $scope.isTranscriptFocused = !$scope.receipt.canDictate;
            $scope.parseTranscript();
        }

        $scope.parseTranscript = function(){
            if ($scope.receipt.project === ''){
                $scope.receipt.project = transcriptParser.parseProject($scope.receipt.transcript);
            }
            if ($scope.receipt.price === ''){
                $scope.receipt.price = transcriptParser.parsePrice($scope.receipt.transcript);
            }
        }

        $scope.submitReceipt = function(){
            $scope.showSpinner = true;
            var payload = {};
            payload.project = $scope.receipt.project;
            payload.price = $scope.receipt.price;
            payload.date = $scope.receipt.date;
            payload.transcript = $scope.receipt.transcript;
            payload.file = $scope.receipt.file;
            payload.user = $scope.receipt.user;
            payload.organisation = $scope.receipt.organisation;
            ReceiptApi.all('receiver').post(payload).then(function(){
                $scope.receiptSubmitted = true;
                $scope.showSpinner = false;
                notify({ message:'Receipt Saved', duration:3000, classes:'alert-success'} );
            },function(){
                $scope.showSpinner = false;
            })
        };

        $scope.navigateToNewReceipt = function(){
            $state.go('newReceipt');
        };

        initialise();
    }]);
;'use strict';

angular.module('app')
    .controller('EditReceiptController', ['$scope', '$state', 'newReceiptDataService', 'userService', 'ReceiptApi', 'notify', '$stateParams', function ($scope, $state, newReceiptDataService, userService, ReceiptApi, notify, $stateParams) {

        var defaultDate = new Date();

        function initialise(){
            $scope.receiptId = $stateParams.receiptId;
            getReceipt();
        }

        function getReceipt(){
            ReceiptApi.all('receipts').one($scope.receiptId).get().then(function (res) {
                $scope.receipt = res.plain();
                $scope.receipt.testDate = new Date($scope.receipt.date);
                //$scope.$apply();
            }, function () {
                $scope.receipt = newReceiptDataService.newReceipt();
                $scope.receipt.date = defaultDate.toDateString();
                notify({ message:'Receipt not found', duration:3000, classes:'alert-danger'} );
            });
        }

        $scope.submitReceipt = function(){
            var receipts = ReceiptApi.all('receipt');
            receipts.post($scope.receipt).then(function (res) {
                notify({ message:'Receipt Saved', duration:3000, classes:'alert-success'} );
                $state.go('dashboard');
            },function(response){
                notify({ message:'status: ' + response.status + '; message: ' + response.message, duration:3000, classes:'alert-success'} );
            });
        };

        initialise();
    }]);
;'use strict';

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
;'use strict';

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
;'use strict';

angular.module('app')
    .controller('formValidationExampleController', ['$scope', function($scope){

        $scope.master = {};

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();

    }]);;'use strict';

angular.module('app')
    .controller('LoginController', ['$scope', 'notify', '$state', 'userService', function ($scope, notify, $state, userService) {

        function initialise(){
            if (userService.isLoggedIn()){
                $state.transitionTo('newReceipt');
            }

            $scope.user = {
                organisation: 'Test Company',
                logon: 'guest@servicemanager.com',
                password: 'password',
                rememberMe: true
            };
        }

        $scope.submitLogon = function(){
            if (!$scope.loginForm.$invalid) {
                /*
                ReceiptApi.all('session').post($scope.user).then(function (res) {
                    // Successful login
                    userService.logIn($scope.values.username, res.access_token, res.role, res.campaign);
                    $state.transitionTo('newReceipt');
                }, function () {
                    // Unsuccessful Login
                    notify({ message:'Login Failed', duration:3000, classes:'alert-fail'} );
                });
                */
                if ($scope.user.logon === 'guest@servicemanager.com' && $scope.user.password === 'password') {
                    // Successful login
                    userService.logIn($scope.user.logon, 'ABCDE12345', $scope.user.organisation);
                    $state.transitionTo('dashboard');
                } else {
                    // Unsuccessful Login
                    notify({ message:'Login Failed', duration:3000, classes:'alert-fail'} );
                }
            }
        };

        initialise();
    }]);
;'use strict';

angular.module('app')
    .controller('MainController', ['$scope', function ($scope, $mdSidenav) {

        function initialise(){
            $scope.myProperty = 'A Value';
        }
/*
        $scope.toggleSidenav = function(menuId){
            $mdSidenav(menuId).toggle();
        };
*/
        initialise();
    }]);
;'use strict';

angular.module('app')
    .controller('NavigationController', ['$scope, $timeout, $mdSidenav, $log', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });

        };
    }]);
;'use strict';

angular.module('app')
    .controller('NewNotesController', ['$scope', '$state', 'newReceiptDataService', function ($scope, $state, newReceiptDataService) {

        var recognition = undefined;

        function initialise(){
            $scope.receipt = newReceiptDataService.getReceipt();
            $scope.recording = false;
            defineRecorder();
        }

        $scope.toggleDictation = function(){
            if ($scope.recording){
                recognition.stop();
            } else {
                if (recognition){
                    recognition.start();
                } else {
                    $scope.receipt.canDictate = false;
                    $state.go('editNotes');
                }
            }
        };

        function defineRecorder(){
            if (window.hasOwnProperty('webkitSpeechRecognition')) {
                recognition = new webkitSpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.lang = "en-GB";

                recognition.onresult = function(e) {
                    var finalTranscript = "";
                    for (var i = e.resultIndex; i < e.results.length; ++i) {
                        if (e.results[i].isFinal) {
                            finalTranscript += e.results[i][0].transcript;
                        }
                    }
                    completeRecording(finalTranscript);
                };

                recognition.onerror = function(e) {
                    recognition.stop();
                    $scope.recording = false;
                    $scope.receipt.canDictate = false;
                    $scope.$apply();
                    $state.go('editNotes');
                };

                recognition.onstart = function(e){
                    $scope.recording = true;
                    $scope.$apply();
                };

                recognition.onend = function(e){
                    $scope.recording = false;
                    $scope.$apply();
                };
            }
        }

        function completeRecording(transcript){
            $scope.receipt.transcript = transcript;
            $scope.receipt.date = moment().format("DD MMM YYYY");
            $scope.receipt.canDictate = true;
            $scope.$apply();
            $state.go('editNotes');
        }

        initialise();
    }]);
;'use strict';

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
;'use strict';

angular.module('app')
    .controller('OrderNewController', ['$scope', '$state', 'userService', 'notify', function ($scope, $state, userService, notify) {

        var orderItemIndex = 0;

        function initialise(){
            $scope.order = {
                customer: {
                    name: 'Test Customer',
                    postcode: 'TE5 T01'
                },
                //services: [{area:'test', heading:'test2', product: {name: 'Website', price: 250, options: {icon: 'web'}}}],
                services: [],
                totalValue: 0
            };
            $scope.newItem = {itemIndex: orderItemIndex};
            $scope.serviceProducts = [
                {product: {name: 'Website', price: 250, options: {icon: 'web'}}},
                {product: {name: 'SEO', price: 200, options: {icon: 'find_in_page'}}},
                {product: {name: 'Pay Per Click', price: 150, options: {icon: 'mouse'}}}
            ];
            $scope.areas = [
                {name: 'Aberdeen'},
                {name: 'Bury'},
                {name: 'Canterbury'},
                {name: 'Durham'},
                {name: 'Esher'},
                {name: 'Fulham'},
                {name: 'Great Yarmouth'},
                {name: 'Harrow'},
                {name: 'Islington'}
            ];
            $scope.headings = [
                {name: 'Accountants'},
                {name: 'Builders'},
                {name: 'Candlestick Makers'},
                {name: 'Dentists'},
                {name: 'Fishermen'},
                {name: 'Plumbers'}
            ];
        }

        $scope.submitOrderNew = function(){
            $state.go('dashboard');
        };

        $scope.addNewService = function(){
            $scope.order.services.push($scope.newItem);
            orderItemIndex++;
            calculateOrderValue();
            $scope.newItem = {itemIndex: orderItemIndex};
        };

        $scope.removeService = function(item){
            var index = $scope.order.services.indexOf(item);
            $scope.order.services.splice(index,1);
            orderItemIndex++;
            calculateOrderValue();
            $scope.newItem = {itemIndex: orderItemIndex};
        };

        function calculateOrderValue() {
            $scope.order.totalValue = _.sumBy($scope.order.services, function(service) { return service.product.price; });
        }

        initialise();
    }]);
;'use strict';

angular.module('app')
    .directive('activeSideNav', function() {
        return {
            scope: false,
            restrict: 'A',
            controller: ['$scope', '$mdSidenav', function($scope, $mdSidenav){
                $scope.toggleSidenav = function(menuId){
                    $mdSidenav(menuId).toggle();
                };
            }]
        };
    });

;'use strict';

angular.module('app')
    .directive('currentUser',function(){
        return {
            templateUrl: 'views/directives/currentUser.html'
        };
    });;'use strict';

angular.module('app')
    .directive('expHtmlDirective',function(){
        return {
            templateUrl: 'views/directives/directiveExampleHtmlTemplate.html'
        };
    });;'use strict';

angular.module('app')
    .directive('expInLineDirective',function(){
        return {
            template: 'Customer Name: {{customer.name}}'
        };
    });'use strict';

angular.module('app')
    .directive('focus', ['$timeout', '$parse', function($timeout, $parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.$watch(attrs.focus, function(newValue, oldValue) {
                    if (newValue) { element[0].focus(); }
                });
                element.bind("blur", function(e) {
                    $timeout(function() {
                        scope.$apply(attrs.focus + "=false");
                    }, 0);
                });
                element.bind("focus", function(e) {
                    $timeout(function() {
                        scope.$apply(attrs.focus + "=true");
                    }, 0);
                })
            }
        }
    }]);;'use strict';

/**
 * Add pickadate directive
 * Type text is mandatory
 * Example:
 <input input-date
 type="text"
 name="created"
 id="inputCreated"
 ng-model="currentTime"
 format="dd/mm/yyyy"
 months-full="{{ monthFr }}"
 months-short="{{ monthShortFr }}"
 weekdays-full="{{ weekdaysFullFr }}"
 weekdays-short="{{ weekdaysShortFr }}"
 weekdays-letter="{{ weekdaysLetterFr }}"
 disable="disable"
 today="today"
 clear="clear"
 close="close"
 on-start="onStart()"
 on-render="onRender()"
 on-open="onOpen()"
 on-close="onClose()"
 on-set="onSet()"
 on-stop="onStop()" />
 */
angular.module('app')
    .directive('inputDate', ["$compile", "$timeout", function ($compile, $timeout) {
        // Fix for issue 46. This gotta be a bug in the materialize code, but this fixes it.
        var style = $('<style>#inputCreated_root {outline: none;}</style>');
        $('html > head').append(style);

        // Define Prototype Date format
        // Use like this
        // today = new Date();
        // var dateString = today.format("dd-m-yy");
        var dateFormat = function () {

            var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
                timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                timezoneClip = /[^-+\dA-Z]/g,
                pad = function (val, len) {
                    val = String(val);
                    len = len || 2;
                    while (val.length < len) {
                        val = "0" + val;
                    }
                    return val;
                };

            // Regexes and supporting functions are cached through closure
            return function (date, mask, utc) {

                var dF = dateFormat;

                // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
                if (arguments.length === 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                    mask = date;
                    date = undefined;
                }

                // Passing date through Date applies Date.parse, if necessary
                date = date ? new Date(date) : new Date();
                if (isNaN(date)) throw SyntaxError("invalid date");

                mask = String(dF.masks[mask] || mask || dF.masks["default"]);

                // Allow setting the utc argument via the mask
                if (mask.slice(0, 4) == "UTC:") {
                    mask = mask.slice(4);
                    utc = true;
                }

                var _ = utc ? "getUTC" : "get",
                    d = date[ _ + "Date" ](),
                    D = date[ _ + "Day" ](),
                    m = date[ _ + "Month" ](),
                    y = date[ _ + "FullYear" ](),
                    H = date[ _ + "Hours" ](),
                    M = date[ _ + "Minutes" ](),
                    s = date[ _ + "Seconds" ](),
                    L = date[ _ + "Milliseconds" ](),
                    o = utc ? 0 : date.getTimezoneOffset(),
                    flags = {
                        d:    d,
                        dd:   pad(d),
                        ddd:  dF.i18n.dayNames[D],
                        dddd: dF.i18n.dayNames[D + 7],
                        m:    m + 1,
                        mm:   pad(m + 1),
                        mmm:  dF.i18n.monthNames[m],
                        mmmm: dF.i18n.monthNames[m + 12],
                        yy:   String(y).slice(2),
                        yyyy: y,
                        h:    H % 12 || 12,
                        hh:   pad(H % 12 || 12),
                        H:    H,
                        HH:   pad(H),
                        M:    M,
                        MM:   pad(M),
                        s:    s,
                        ss:   pad(s),
                        l:    pad(L, 3),
                        L:    pad(L > 99 ? Math.round(L / 10) : L),
                        t:    H < 12 ? "a"  : "p",
                        tt:   H < 12 ? "am" : "pm",
                        T:    H < 12 ? "A"  : "P",
                        TT:   H < 12 ? "AM" : "PM",
                        Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                        o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                        S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                    };

                return mask.replace(token, function ($0) {
                    return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
                });
            };
        }();

        // Some common format strings
        dateFormat.masks = {
            "default":      "ddd mmm dd yyyy HH:MM:ss",
            shortDate:      "m/d/yy",
            mediumDate:     "mmm d, yyyy",
            longDate:       "mmmm d, yyyy",
            fullDate:       "dddd, mmmm d, yyyy",
            shortTime:      "h:MM TT",
            mediumTime:     "h:MM:ss TT",
            longTime:       "h:MM:ss TT Z",
            isoDate:        "yyyy-mm-dd",
            isoTime:        "HH:MM:ss",
            isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };

        // Internationalization strings
        dateFormat.i18n = {
            dayNames: [
                "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ],
            monthNames: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ]
        };

        // For convenience...
        Date.prototype.format = function (mask, utc) {
            return dateFormat(this, mask, utc);
        };

        /**
         * Validate date object
         * @param  {Date}  date
         * @return {Boolean}
         */
        var isValidDate = function(date) {
            if( Object.prototype.toString.call(date) === '[object Date]' ) {
                return !isNaN(date.getTime());
            }
            return false;
        };

        return {
            require: 'ngModel',
            scope: {
                container: "@",
                format: "@",
                formatSubmit: "@",
                monthsFull: "@",
                monthsShort: "@",
                weekdaysFull: "@",
                weekdaysShort: "@",
                weekdaysLetter: "@",
                firstDay: "=",
                disable: "=",
                today: "=",
                clear: "=",
                close: "=",
                selectYears: "=",
                onStart: "&",
                onRender: "&",
                onOpen: "&",
                onClose: "&",
                onSet: "&",
                onStop: "&",
                ngReadonly: "=?",
                max: "@",
                min: "@"
            },
            link: function (scope, element, attrs, ngModelCtrl) {

                ngModelCtrl.$formatters.unshift(function (modelValue) {
                    if (modelValue) {
                        var date = new Date(modelValue);
                        return (angular.isDefined(scope.format)) ? date.format(scope.format) : date.format('d mmmm, yyyy');
                    }
                    return null;
                });

                var monthsFull = (angular.isDefined(scope.monthsFull)) ? scope.$eval(scope.monthsFull) : undefined,
                    monthsShort = (angular.isDefined(scope.monthsShort)) ? scope.$eval(scope.monthsShort) : undefined,
                    weekdaysFull = (angular.isDefined(scope.weekdaysFull)) ? scope.$eval(scope.weekdaysFull) : undefined,
                    weekdaysShort = (angular.isDefined(scope.weekdaysShort)) ? scope.$eval(scope.weekdaysShort) : undefined,
                    weekdaysLetter = (angular.isDefined(scope.weekdaysLetter)) ? scope.$eval(scope.weekdaysLetter) : undefined;


                $compile(element.contents())(scope);
                if (!(scope.ngReadonly)) {
                    $timeout(function () {
                        var options = {
                            container : scope.container,
                            format: (angular.isDefined(scope.format)) ? scope.format : undefined,
                            formatSubmit: (angular.isDefined(scope.formatSubmit)) ? scope.formatSubmit : undefined,
                            monthsFull: (angular.isDefined(monthsFull)) ? monthsFull : undefined,
                            monthsShort: (angular.isDefined(monthsShort)) ? monthsShort : undefined,
                            weekdaysFull: (angular.isDefined(weekdaysFull)) ? weekdaysFull : undefined,
                            weekdaysShort: (angular.isDefined(weekdaysShort)) ? weekdaysShort : undefined,
                            weekdaysLetter: (angular.isDefined(weekdaysLetter)) ? weekdaysLetter : undefined,
                            firstDay: (angular.isDefined(scope.firstDay)) ? scope.firstDay : 0,
                            disable: (angular.isDefined(scope.disable)) ? scope.disable : undefined,
                            today: (angular.isDefined(scope.today)) ? scope.today : undefined,
                            clear: (angular.isDefined(scope.clear)) ? scope.clear : undefined,
                            close: (angular.isDefined(scope.close)) ? scope.close : undefined,
                            selectYears: (angular.isDefined(scope.selectYears)) ? scope.selectYears : undefined,
                            onStart: (angular.isDefined(scope.onStart)) ? function(){ scope.onStart(); } : undefined,
                            onRender: (angular.isDefined(scope.onRender)) ? function(){ scope.onRender(); } : undefined,
                            onOpen: (angular.isDefined(scope.onOpen)) ? function(){ scope.onOpen(); } : undefined,
                            onClose: (angular.isDefined(scope.onClose)) ? function(){ scope.onClose(); } : undefined,
                            onSet: (angular.isDefined(scope.onSet)) ? function(){ scope.onSet(); } : undefined,
                            onStop: (angular.isDefined(scope.onStop)) ? function(){ scope.onStop(); } : undefined
                        };
                        if (!scope.container) {
                            delete options.container;
                        }
                        var pickadateInput = element.pickadate(options);
                        //pickadate API
                        var picker = pickadateInput.pickadate('picker');

                        //watcher of min, max, and disabled dates
                        scope.$watch('max', function(newMax) {
                            if( picker ) {
                                var maxDate = new Date(newMax);
                                picker.set({max: isValidDate(maxDate) ? maxDate : false});
                            }
                        });
                        scope.$watch('min', function(newMin) {
                            if( picker ) {
                                var minDate = new Date(newMin);
                                picker.set({min: isValidDate(minDate) ? minDate : false});
                            }
                        });
                        scope.$watch('disable', function(newDisabled) {
                            if( picker ) {
                                var disabledDates = angular.isDefined(newDisabled) && angular.isArray(newDisabled) ? newDisabled : false;
                                picker.set({disable: disabledDates});
                            }
                        });
                    });
                }
            }
        };
    }]);
;'use strict';

angular.module('app')
    .directive('onLastRepeat', function() {
        return function(scope, element, attrs) {
            if (scope.$last)
                setTimeout(function() {
                    scope.$emit('onRepeatLast', element, attrs);
                }, 1);
        };
    });;'use strict';

angular.module('app')
    .directive('registerDomComponents', function() {
        return {
            restrict: 'A',
            link: function() {
                $('.materialboxed').materialbox();
            }
        }
    });;(function () {
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

})();;'use strict';

angular.module('app')
    .factory('ReceiptApi', ['Restangular', 'RECEIPT_API_URL', function (Restangular, url) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl(url);
            RestangularConfigurer.addRequestInterceptor(function (element, operation, what) {
                if (operation === 'post' && what === 'info') {
                    //post web request to the info endpoint
                }

                return element;
            });

            RestangularConfigurer.addResponseInterceptor(function (data, operation, what) {

                if (operation === 'get' && what === 'info') {
                    //get web request from the info endpoint
                }

                return data;
            });
        });
    }]);
;'use strict';

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

    }]);;'use strict';

angular.module('app')
    .service('transcriptParser', [function() {

        function extractProject(transcript){

            var transcriptCopy = new String(transcript);
            transcriptCopy = transcriptCopy.toLowerCase();

            var projectIndex = getTagValueStartIndex(transcriptCopy, 'project');

            if (projectIndex < 0){
                return '';
            }

            var projectName = transcript.substring(projectIndex, getTagValueEndIndex(transcriptCopy, projectIndex, true));
            return projectName;
        }

        function extractPrice(transcript){

            var transcriptCopy = new String(transcript);
            transcriptCopy = transcriptCopy.toLowerCase();

            var priceIndex = getTagValueStartIndex(transcriptCopy, 'price');

            if (priceIndex < 0){
                return '';
            }

            var priceValue = transcript.substring(priceIndex, getTagValueEndIndex(transcriptCopy, priceIndex));
            return priceValue;
        }

        function getTagValueStartIndex(transcript, tag){
            var tagIndex = transcript.indexOf(tag);
            if (tagIndex < 0){
                return -1;
            }
            //tag value will be at the tag end plus one space from the tag start index
            tagIndex = tagIndex + tag.length + 1;
            //compare to length of the transcript (not zero based) and if the same length then there is no value
            if (tagIndex >= transcript.length){
                return -1;
            }
            return tagIndex;
        }

        function getTagValueEndIndex(transcript, startIndex, includeSpaces){
            var possibleTagValueEndIndexes = [];

            //add the transcript end index to our array of possible end indexes
            possibleTagValueEndIndexes.push(transcript.length);

            if (!includeSpaces){
                var nextSpaceIndex = transcript.indexOf(' ',startIndex);
                if (nextSpaceIndex > -1){
                    possibleTagValueEndIndexes.push(nextSpaceIndex);
                }
            }

            //search to see if there are any further "project" tags. If so, we'll end the tag value there
            var nextProjectTagIndex = transcript.indexOf('project',startIndex);
            if (nextProjectTagIndex > -1){
                possibleTagValueEndIndexes.push(nextProjectTagIndex);
            }

            //search to see if there are any further "price" tags. If so, we'll end the tag value there
            var nextPriceTagIndex = transcript.indexOf('price',startIndex);
            if (nextPriceTagIndex > -1){
                possibleTagValueEndIndexes.push(nextPriceTagIndex);
            }

            //the tag value end index is the lowest value within our possibles array
            return Math.min.apply(Math, possibleTagValueEndIndexes);
        }

        return {

            parseProject: function (transcript) {
                var project = extractProject(transcript);
                return project;
            },
            parsePrice: function (transcript) {
                var project = extractPrice(transcript);
                return project;
            }
        }

    }]);;'use strict';

angular.module('app')
    .service('userService', ['ipCookie', 'ReceiptApi', '$q', function userService(ipCookie, ReceiptApi, $q) {

        var loggedIn = false;
        var authTokenIsValid = false;


        this.getCurrentUser = function () {
            return ipCookie('currentUser');
        };

        this.setCurrentUser = function (user) {
            ipCookie('currentUser', user, { expires: 1 });
            authTokenIsValid = true;
        };

        this.logIn = function (username, token, organisation) {

            var user = {
                username: username,
                token: token,
                organisation: organisation
            };

            this.setCurrentUser(user);

            // these could be methods in the future
            loggedIn = true;
        };

        this.getToken = function () {
            var user = this.getCurrentUser();

            if (user) {
                return user.token;
            } else {
                return false;
            }
        };

        this.getOrganisation = function () {
            var user = this.getCurrentUser();

            if (user) {
                return user.organisation;
            } else {
                return false;
            }
        };

        this.checkTokenValidity = function (token) {

            var defer = $q.defer();

            if (authTokenIsValid) {

                defer.resolve(true);

            } else {

                var dis = this;
                //ReceiptApi.one('session', token).get().then(function () {
                if (token === 'ABCDE12345'){
                    loggedIn = true;
                    authTokenIsValid = true;
                    defer.resolve(true);
                } else {
                   //}, function () {
                    //    dis.logout();
                    defer.resolve(false);
                    //});
                }
            }

            return defer.promise;
        };

        this.isLoggedIn = function () {

            var isLoggedIn = $q.defer();
            var token = this.getToken();

            if (token) {
                this.checkTokenValidity(token).then(isLoggedIn.resolve);

            } else {
                ipCookie.remove('currentUser');
                isLoggedIn.resolve(false);

            }

            return isLoggedIn.promise;

        };

        this.logout = function () {
            var defer = $q.defer();
            var token = this.getToken();

            if (!this.getCurrentUser()) {
                defer.resolve(false);
            }

            //ReceiptApi.one('session', token).remove().then(function () {
                // success
                ipCookie.remove('currentUser');

                loggedIn = false;

                authTokenIsValid = false;

                defer.resolve(true);

            //}, function () {
            //    // failure
            //    defer.resolve(false);
            //});

            return defer.promise;
        };

    }]);;'use strict';

angular.module('app')
    .factory('_', ['$window', '$state', function($window, $state) {

        if(!$window._){
            $state.go('login');
        }
        return $window._;

    }]);