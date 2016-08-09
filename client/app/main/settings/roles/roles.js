'use strict'

angular.module('accountAdminApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.roles.create', {
        url: '/create',
        onEnter: Modal => Modal.openModal('app/main/settings/roles/createRoleModal.html', 'SettingsRolesModalCtrl')
      })
      .state('main.roles.role', {
        url: '/:id?state',
        onEnter: (Modal, $stateParams) => Modal.openModal('app/main/settings/roles/roleModal.html', 'SettingsRolesModalCtrl', $stateParams.id, $stateParams.state)
      })
  })
