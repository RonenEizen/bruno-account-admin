'use strict'

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.paymentsSettings.bankInfo', {
        url: '/bank-info',
        onEnter: Modal => Modal.openModal('app/main/settings/payments/bank-info-modal.html', 'SettingsPaymentsModalCtrl')
      })
  })
