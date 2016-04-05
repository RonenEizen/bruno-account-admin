'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.integration.view', {
        url: '/:name',
        templateUrl: 'app/main/settings/integration/integrationModal.html',
        controller: 'SettingsIntegrationCtrl',
        controllerAs: 'vm'
      })
  });
