'use strict';

angular.module('userAdminApp')
  .controller('MainCtrl', function ($scope, $location, Auth) {

    $scope.navRevealed = true;
    $scope.settingsOpen = false;

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
