

angular.module('myApp').directive("compareTo", compareTo);

function compareTo() {
    return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function (viewValue, $scope) {
            var noMatch = viewValue != scope.myForm.password.$viewValue
            ctrl.$setValidity('noMatch', !noMatch)
        })
    }
}
}