'use strict';

(function() {

class MainController {

  constructor(Modal, Auth) {
    this.navRevealed = true;
    this.settingsOpen = false;

    // FLYOUT
    this.modal = Modal.flyout;

    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  // calls the modal with the html template and user index
  customModal(html, object) {
    var modalContent = {
      modal: {
        dismissable: true,
        html: html,
        object: object
      }
    };
    return this.modal(modalContent);
  }

  // need to refer to $location

  logout() {
    // Auth.logout();
    // $location.path('/login');
  }

  isActive() {
    // return route === $location.path();
  }
}

angular.module('accountAdminApp')
  .controller('MainController', MainController);

})();
