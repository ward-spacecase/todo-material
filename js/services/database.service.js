(function () {
    angular.module('myApp')
        .service('firebaseStorage', function ($firebaseArray, $user) {

            var self = this;
            var ref = firebase.database().ref().child("users").child($user.getUser().uid);

            self.userLists = $firebaseArray(ref);

            self.userLists.$loaded().then(function() {

            });

            self.addList = function(listTitle) {
                self.userLists.$add(listTitle);
            }

        })


})();