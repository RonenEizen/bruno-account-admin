'use strict';

angular.module('userAdminApp')
  .controller('DomainCtrl', function ($scope, $log) {
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
