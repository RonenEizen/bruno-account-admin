'use strict';

angular.module('accountAdminApp')
  .controller('SettingsDomainCtrl', function ($scope, SettingsService) {
    $scope.pageTitle = 'Domain';
    $scope.domain = SettingsService.domain.domain;
    $scope.subdomain = SettingsService.domain.subdomain;
  });
