(function() {
    angular.module('default-home', [])

        .component('defaulthome', {

            templateUrl: 'js/components/default-home/default-home.template.html',
            controller: DefaultHomeController,
            controllerAs: 'vm'
        });

    function DefaultHomeController() {
        var vm = this;

        vm.name = 'Guest';

    }

})();