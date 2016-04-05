'use strict';

angular.module('accountAdminApp')
  .controller('SettingsDomainCtrl', function ($scope) {
    $scope.pageTitle = 'Domain';
    $scope.domain = $scope.main.domain.domain;
    $scope.subdomain = $scope.main.domain.subdomain;
  });
