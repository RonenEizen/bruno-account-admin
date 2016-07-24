'use strict';

angular.module('accountAdminApp')
  .controller('SettingsPaymentsCtrl', function ($scope, SettingsService, Modal) {
    $scope.pageTitle = 'Payments';

    $scope.payments = SettingsService.onlinePayments;
    $scope.businessInfo = SettingsService.businessInfo;
    $scope.business = SettingsService.businessInfo.business;
    $scope.owner = SettingsService.businessInfo.owner;

    // Modal calls
    $scope.businessModal = Modal.businessModal;
    $scope.ownerModal = Modal.ownerModal;
  });
