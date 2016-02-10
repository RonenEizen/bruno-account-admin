'use strict';

angular.module('accountAdminApp')
  .controller('SettingsPaymentsCtrl', function ($scope) {
    $scope.pageTitle = 'Payments';

    $scope.enabled = true;
    $scope.paymentsMaster = {};
    $scope.payments = {
      edit: false,
      bankName: 'Chase Bank',
      bankNo: '021000021',
      accountNo: '45300367'
    };
    $scope.reset = function () { $scope.payments = angular.copy($scope.paymentsMaster); $scope.payments.edit = false; };
    $scope.save = function () { $scope.paymentsMaster = angular.copy($scope.payments); $scope.payments.edit = false; };
  });
