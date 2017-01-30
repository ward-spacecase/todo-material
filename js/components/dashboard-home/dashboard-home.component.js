(function() {
    angular.module('dashboard', [])
        .component('dashboardhome', {
           templateUrl: 'js/components/dashboard-home/dashboard-home.template.html',
            controller: DashboardHomeController,
            controllerAs: 'vm'
        });

    function DashboardHomeController($user) {
        var vm = this;
        vm.user = $user.getUser();

    }
})();