(function() {
    angular.module('default-home', [])

        .component('defaulthome', {

            templateUrl: 'js/components/default-home/default-home.template.html',
            controller: DefaultHomeController,
            controllerAs: 'vm'
        });

    function DefaultHomeController(auth, $mdToast) {
        var vm = this;

        vm.waiting = false;
        vm.loginBool = false;
        vm.user = {};
        vm.loginError = function (error) {
            vm._loginError = error;
        };

        vm.register = function() {
            vm.waiting=true;
            var user = auth.registerUser(vm.user).then(function (user) {
                vm.waiting = false;
                console.log(user);
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Success! Now logged in ')
                        .hideDelay(3000)
                );
            }).catch(function (error) {
                vm.waiting = false;

                vm.loginError(error.message);
            });
        };

        vm.login = function() {
            vm.waiting=true;

            var user = auth.loginUser(vm.user).then(function(user){
                vm.waiting = false;

                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Success! Now logged in ')
                        .hideDelay(3000)
                );
            }) .catch(function (error) {
                vm.waiting = false;

                vm.loginError(error.message);
            })
        };

        vm.registerWithGoogle = function() {
            vm.waiting=true;

            auth.loginWithGoogle().then(function(result) {
                vm.waiting = false;

                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Success! Now logged in')
                        .hideDelay(3000)
                );
            }).catch(function(error) {
                vm.waiting = false;

                vm.loginError(error.message);
            });
        }

    }

})();