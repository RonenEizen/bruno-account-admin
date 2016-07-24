'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.roles.create', {
        url: '/create',
        onEnter: function (Modal) {
          Modal.createRolesModal()
        }
      })
      .state('main.roles.role', {
        url: '/:id/:state',
        onEnter: function (Modal, SettingsService, $stateParams) {
          Modal.roleModal(_.find(SettingsService.roles, { '_id': $stateParams.id }), $stateParams.state)
        }
      })
    $urlRouterProvider
      .when('/settings/roles/:_id', '/settings/roles/:_id/view');
  });
