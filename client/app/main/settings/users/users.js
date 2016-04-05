'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.users.create', {
        url: '/create',
        templateUrl: 'app/main/settings/users/createUserModal.html'
      })
      .state('main.users.user', {
        abstract: true,
        url: '/:_id',
        templateUrl: 'app/main/settings/users/userModal.html'
      })
      .state('main.users.user.view', {
        url: '/view',
        templateUrl: 'app/main/settings/users/viewUserModal.html'
      })
      .state('main.users.user.edit', {
        url: '/edit',
        templateUrl: 'app/main/settings/users/editUserModal.html'
      })
      .state('main.users.user.remove', {
        url: '/remove',
        templateUrl: 'app/main/settings/users/removeUserModal.html'
      })
    $urlRouterProvider
      .when('/settings/users/:_id', '/settings/users/:_id/view')
  })
