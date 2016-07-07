'use strict';

angular.module('accountAdminApp')
  .controller('SettingsDomainCtrl', function ($scope, SettingsService, Modal) {
    $scope.pageTitle = 'Domain';
    $scope.domain = SettingsService.domain.domain;
    $scope.subdomain = SettingsService.domain.subdomain;

    // Modal calls
    $scope.domainModal = Modal.domainModal;
    $scope.subdomainModal = Modal.subdomainModal;
  });
