'use strict';

angular.module('userAdminApp')
  .controller('MainCtrl', function ($scope, $location, Modal, Auth) {

    $scope.navRevealed = true;
    $scope.settingsOpen = false;

    // FLYOUT
    $scope.modal = Modal.flyout;

    // calls the modal with the html template and user index
    $scope.customModal = function (html, object) {
      var modalContent = {
        modal: {
          dismissable: true,
          html: html,
          object: object
        }
      };
      return $scope.modal(modalContent);
    };

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
