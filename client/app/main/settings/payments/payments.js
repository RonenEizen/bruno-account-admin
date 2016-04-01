'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.paymentsSettings.bankInfo', {
        url: '/bank-info',
        templateUrl: 'app/main/settings/payments/bankInfoModal.html',
        controller: 'SettingsPaymentsCtrl',
        controllerAs: 'vm'
      })
  });
