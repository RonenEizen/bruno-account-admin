'use strict'

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.integration.view', {
        url: '/:name',
        onEnter: (Modal, $stateParams) => Modal.openModal('app/main/settings/integration/integration-modal.html', 'SettingsIntegrationModalCtrl', $stateParams.name)
      })
  })
