'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.integration.view', {
        url: '/:name',
        onEnter: function (Modal, SettingsService, $stateParams) {
          Modal.integrationModal(SettingsService.integrations[$stateParams.name])
        }
      });
  });
