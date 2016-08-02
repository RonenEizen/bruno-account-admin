'use strict';

angular.module('accountAdminApp')
  .controller('SettingsIntegrationCtrl', function ($scope, SettingsService) {
    $scope.pageTitle = 'Integrations';

    $scope.integrations = SettingsService.integrations;
    $scope.reviews = SettingsService.reviews;
  });
