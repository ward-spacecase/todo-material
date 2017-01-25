(function() {

    var myApp = angular.module('myApp',

    ['ngMaterial', 'ui.routes', 'default-home', 'firebase'])

        .config(function($mdThemingProvider) {

            $mdThemingProvider.theme('docs-dark')
                .primaryPalette('blue-grey')
                .accentPalette('blue');

        });




})();
