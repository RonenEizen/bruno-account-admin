'use strict';

(function() {

angular.module('accountAdminApp.auth')
  .run(function($rootScope, $state, Auth) {
    // Redirect to login if route requires auth and the user is not logged in, or doesn't have required role
    $rootScope.$on('$stateChangeStart', function(event, next) {
      if (next.public) {
        return;
      }

      Auth.isLoggedIn(_.noop).then(is => {
        if(!is) {
          event.preventDefault();
          $state.go('login');
        }
      });

      // if (!next.authenticate) {
      //   return;
      // }

      // if (typeof next.authenticate === 'string') {
      //   Auth.hasRole(next.authenticate, _.noop).then(has => {
      //     if (has) {
      //       return;
      //     }

      //     event.preventDefault();
      //     return Auth.isLoggedIn(_.noop).then(is => {
      //       $state.go(is ? 'main' : 'login');
      //     });
      //   });
      // } else {
      //   Auth.isLoggedIn(_.noop).then(is => {
      //     if (is) {
      //       return;
      //     }

      //     event.preventDefault();
      //     $state.go('login');
      //   });
      // }
    });
  });

})();
