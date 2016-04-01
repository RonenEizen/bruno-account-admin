'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.integration.view', {
        url: '/view',
        templateUrl: 'app/main/settings/integration/integrationModal.html',
        controller: 'SettingsIntegrationCtrl',
        controllerAs: 'vm'
      })
  });
