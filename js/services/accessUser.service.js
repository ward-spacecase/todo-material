(function(){
    angular.module('myApp')
        .service('$user', function() {
            var self = this;

           self.setUser = function(user) {
               localStorage.qu = JSON.stringify(user);
           };

           self.loggedIn = function() {
               var user = localStorage.qu;

               if(user == null || user == undefined) {
                   return false;
               } else {
                   return true;
               }
           };
           self.getUser = function() {
               var user = JSON.parse(localStorage.qu);

               if(self.loggedIn()) {
                   return user;
               } else {
                   return false;
               }

           };

           self.logout = function () {
               delete localStorage.qu;
           }
        });

})();