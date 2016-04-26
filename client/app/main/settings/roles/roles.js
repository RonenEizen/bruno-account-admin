'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.roles.create', {
        url: '/create',
        templateUrl: 'app/main/settings/roles/createRoleModal.html'
      })
      .state('main.roles.role', {
        abstract: true,
        url: '/:_id',
        templateUrl: 'app/main/settings/roles/roleModal.html'
      })
      .state('main.roles.role.view', {
        url: '/view',
        templateUrl: 'app/main/settings/roles/viewRoleModal.html'
      })
      .state('main.roles.role.edit', {
        url: '/edit',
        templateUrl: 'app/main/settings/roles/editRoleModal.html'
      })
      .state('main.roles.role.remove', {
        url: '/remove',
        templateUrl: 'app/main/settings/roles/removeRoleModal.html'
      });
    $urlRouterProvider
      .when('/settings/roles/:_id', '/settings/roles/:_id/view');
  });
