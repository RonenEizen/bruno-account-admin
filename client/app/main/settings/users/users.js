'use strict'

angular.module('accountAdminApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.users.create', {
        url: '/create',
        onEnter: Modal => Modal.openModal('app/main/settings/users/createUserModal.html', 'SettingsUsersModalCtrl')
      })
      .state('main.users.user', {
        url: '/:id?state',
        onEnter: (Modal, $stateParams) => Modal.openModal('app/main/settings/users/userModal.html', 'SettingsUsersModalCtrl', $stateParams.id, $stateParams.state)
      })
  })
