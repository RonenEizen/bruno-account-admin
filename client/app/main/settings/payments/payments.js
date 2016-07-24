'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.paymentsSettings.bankInfo', {
        url: '/bank-info',
        onEnter: function (Modal, SettingsService) {
          Modal.bankInfoModal(SettingsService.onlinePayments)
          console.log(Modal.bankInfoModal)
        }
      })
  });
