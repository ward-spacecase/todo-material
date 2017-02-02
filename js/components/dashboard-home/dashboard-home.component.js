(function() {
    angular.module('dashboard', [])
        .component('dashboardhome', {
           templateUrl: 'js/components/dashboard-home/dashboard-home.template.html',
            controller: DashboardHomeController,
            controllerAs: 'vm'
        });

    function DashboardHomeController($user, FirebaseStorage, $scope) {
        var vm = this;

        vm.user = $user.getUser();

       var test = FirebaseStorage().$bindTo($scope, "userFire").then(function(){
           $scope.userFire.lists = [{listTitle: "list1"}, {listTitle: "list2"}];

       });



    }
})();