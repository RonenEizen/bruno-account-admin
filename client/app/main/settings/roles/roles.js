'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.roles.create', {
        url: '/create',
        templateUrl: 'app/main/settings/roles/createRoleModal.html',
        controller: 'SettingsRolesCtrl',
        controllerAs: 'vm'
      })
      .state('main.roles.view', {
        url: '/view',
        templateUrl: 'app/main/settings/roles/viewRoleModal.html',
        controller: 'SettingsRolesCtrl',
        controllerAs: 'vm'
      })
  });
