(function() {
    angular.module('default-home', [])

        .component('defaulthome', {

            templateUrl: 'js/components/default-home/default-home.template.html',
            controller: DefaultHomeController,
            controllerAs: 'vm'
        });

    function DefaultHomeController(auth, $mdToast) {
        var vm = this;

        vm.loginBool = false;
        vm.user = {};

        vm.register = function() {
            var user = auth.registerUser(vm.user).then(function (user) {
                console.log(user);
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Success! Now logged in ')
                        .hideDelay(3000)
                );
            }).catch(function (error) {
                vm.error = error;
            });
        };

        vm.login = function() {
            var user = auth.loginUser(vm.user).then(function(user){
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Success! Now logged in ')
                        .hideDelay(3000)
                );
            }) .catch(function (error) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Error: ' + error.message)
                        .hideDelay(3000)
                );
            })
        };

        vm.registerWithGoogle = function() {
            auth.loginWithGoogle().then(function(result) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Success! Now logged in')
                        .hideDelay(3000)
                );
            }).catch(function(error) {
                console.error("Authentication failed:", error);
            });
        }

    }
    function loginError(error) {

    }

})();