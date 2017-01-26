(function() {
    angular.module('default-home', [])

        .component('defaulthome', {

            templateUrl: 'js/components/default-home/default-home.template.html',
            controller: DefaultHomeController,
            controllerAs: 'vm'
        });

    function DefaultHomeController() {
        var vm = this;

        vm.loginBool = true;
        vm.name = '';

        vm.register = function(email, pw) {

            var ref = new Firebase(config.databaseURL);
          ref.createUser({
                email: email,
                password: pw
          }, function(error, userData){
              if(error) {
                  console.log("Couldn't register..." + error);
              } else {
                  console.log("Successfully created user account with uid:", userData.uid);

              }
          });
        }

    }

})();