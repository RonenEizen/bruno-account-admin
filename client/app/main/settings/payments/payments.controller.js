'use strict';

angular.module('accountAdminApp')
  .controller('SettingsPaymentsCtrl', function ($scope, SettingsService, Modal) {
    $scope.pageTitle = 'Payments';

    $scope.payments = SettingsService.onlinePayments;
    $scope.businessInfo = SettingsService.businessInfo;

    // Modal calls
    $scope.bankInfoModal = Modal.bankInfoModal;
    $scope.businessModal = Modal.businessModal;
    $scope.ownerModal = Modal.ownerModal;
  });
