(function() {
    angular.module('default-home', [])

        .component('defaulthome', {

            templateUrl: 'js/components/default-home/default-home.template.html',
            controller: DefaultHomeController,
            controllerAs: 'vm'
        });

    function DefaultHomeController(auth, $mdToast, $state, $scope) {
        var vm = this;

        vm.waiting = false;
        vm.loginBool = false;
        vm.userIsLoggedIn = false;
        $scope.$watch('vm.userIsLoggedIn', function(){
            if(vm.userIsLoggedIn == true) {
                $state.go('dashboard');
            }
        });

        var successLogin = function() {
            vm.waiting = false;
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Success! Now logged in ')
                    .hideDelay(3000)
            );
            vm.userIsLoggedIn = true;
        };
        var unSuccessLogin = function(errorMessage) {
            vm.waiting = false;

            vm._loginError = errorMessage;
        };

        vm.user = {};


        vm.register = function() {
            vm.waiting=true;
            var user = auth.registerUser(vm.user).then(function (user) {
              successLogin();
            }).catch(function (error) {
                unSuccessLogin(error.message);
            });
        };

        vm.login = function() {
            vm.waiting=true;

            var user = auth.loginUser(vm.user).then(function(user){
                successLogin();
            }) .catch(function (error) {
                unSuccessLogin(error.message);
            })
        };

        vm.registerWithGoogle = function() {
            vm.waiting=true;

            auth.loginWithGoogle().then(function(result) {
              successLogin();
            }).catch(function(error) {
                unSuccessLogin(error.message);
            });
        }

    }

})();