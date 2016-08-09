'use strict';

angular.module('accountAdminApp')
  .controller('SettingsIntegrationCtrl', function ($scope, IntegrationsService) {
    $scope.pageTitle = 'Integrations';

    $scope.integrations = IntegrationsService.integrations;
    $scope.reviews = IntegrationsService.reviews;
  });
