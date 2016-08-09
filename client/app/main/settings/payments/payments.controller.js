'use strict'

angular.module('accountAdminApp')
  .controller('SettingsPaymentsCtrl', function ($scope, BusinessInfoService, PaymentsService, Modal) {
    $scope.pageTitle = 'Payments'

    $scope.payments = PaymentsService.payments

    $scope.business = BusinessInfoService.businessInfo.business
    $scope.owner = BusinessInfoService.businessInfo.owner

    // Modal calls
    $scope.businessModal = () => Modal.openModal('app/main/settings/business-info/business-modal.html', 'SettingsBusinessInfoModalCtrl')
    $scope.ownerModal = () => Modal.openModal('app/main/settings/business-info/owner-modal.html', 'SettingsBusinessInfoModalCtrl')
  })
