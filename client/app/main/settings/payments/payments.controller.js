'use strict';

angular.module('userAdminApp')
  .controller('SettingsPaymentsCtrl', function ($scope) {
    $scope.pageTitle = 'Online Payments';

    $scope.enabled = true;
    $scope.paymentsMaster = {};
    $scope.payments = {
      edit: false,
      bankNo: "",
      accountNo: ""
    };
    $scope.reset = function () { $scope.payments = angular.copy($scope.paymentsMaster); $scope.payments.edit = false; }
    $scope.save = function () { $scope.paymentsMaster = angular.copy($scope.payments); $scope.payments.edit = false; }
  });
