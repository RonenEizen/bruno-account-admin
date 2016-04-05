'use strict';

angular.module('accountAdminApp')
  .controller('SettingsPaymentsCtrl', function ($scope) {
    $scope.pageTitle = 'Payments';

    $scope.payments = $scope.main.onlinePayments;
    $scope.businessInfo = $scope.main.businessInfo;
  });
