(function() {
    angular.module('dashboard', [])
        .component('dashboardhome', {
           templateUrl: 'js/components/dashboard-home/dashboard-home.template.html',
            controller: DashboardHomeController,
            controllerAs: 'vm'
        });

    function DashboardHomeController($user, firebaseStorage) {
        var vm = this;

        vm.fs = firebaseStorage;
        vm.user = $user.getUser();

    }
})();