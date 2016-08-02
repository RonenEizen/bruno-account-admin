'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.users.create', {
        url: '/create',
        onEnter: function (Modal) {
          Modal.createUserModal()
        }
      })
      .state('main.users.user', {
        url: '/:id/:state',
        onEnter: function (Modal, SettingsService, $stateParams) {
          Modal.userModal(_.find(SettingsService.users, { '_id': $stateParams.id }), $stateParams.state)
        }
      })
    $urlRouterProvider
      .when('/settings/users/:id', '/settings/users/:id/view')
  });
