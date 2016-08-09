'use strict';

angular.module('accountAdminApp')
  .controller('SettingsDomainCtrl', function ($scope, DomainService) {
    $scope.pageTitle = 'Domain';
    $scope.domain = DomainService.domain.domain;
    $scope.subdomain = DomainService.domain.subdomain;
  });
