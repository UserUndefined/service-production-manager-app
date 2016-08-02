describe('LoginController', function() {
    beforeEach(module('app'));

    var $scope, $controller;

    beforeEach(inject(function(_$controller_, formDirective, _$rootScope_){
        $scope = _$rootScope_.$new();
        $controller = _$controller_('LoginController', { $scope: $scope });
        $controller.loginForm = $controller(formDirective[0].controller, {
            $scope: $scope
        });
    }));

    describe('incorrect login details', function() {
        it('fails authentication', function() {
            $scope.user = {
                organisation: 'Test Company',
                logon: 'Guest',
                password: 'password',
                rememberMe: true
            };
            expect($scope.myProperty).toEqual('A Value');
            //$scope.submitLogon();
        });
    });
});