'use strict';

angular.module('userAdminApp')
  .controller('SettingsDomainCtrl', function ($scope) {
    $scope.pageTitle = 'Domain';

    $scope.subdomainMaster = {};
    $scope.subdomain = {
      edit: false,
      subdomain: ""
    };

    $scope.save = function() {
      $scope.subdomainMaster = angular.copy($scope.subdomain);
      $scope.subdomain.edit = false;
    };
  });
