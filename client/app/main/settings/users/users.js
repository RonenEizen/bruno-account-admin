'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.users.create', {
        url: '/create',
        templateUrl: 'app/main/settings/users/createUserModal.html',
        controller: 'SettingsUsersCtrl',
        controllerAs: 'vm'
      })
      .state('main.users.view', {
        url: '/view',
        templateUrl: 'app/main/settings/users/viewUserModal.html',
        controller: 'SettingsUsersCtrl',
        controllerAs: 'vm'
      })
  });
