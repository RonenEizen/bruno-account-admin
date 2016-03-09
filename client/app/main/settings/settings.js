'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.accountSettings', {
        url: '/account',
        templateUrl: 'app/main/settings/account/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'vm'
      })
      .state('main.businessInfo', {
        url: '/business-info',
        templateUrl: 'app/main/settings/business-info/business-info.html',
        controller: 'SettingsBusinessInfoCtrl',
        controllerAs: 'vm'
      })
      .state('main.users', {
        url: '/users',
        templateUrl: 'app/main/settings/users/users.html',
        controller: 'SettingsUsersCtrl',
        controllerAs: 'vm'
      })
      .state('main.roles', {
        url: '/roles',
        templateUrl: 'app/main/settings/roles/roles.html',
        controller: 'SettingsRolesCtrl',
        controllerAs: 'vm'
      })
      .state('main.deliverySettings', {
        url: '/delivery',
        templateUrl: 'app/main/settings/delivery/delivery.html',
        controller: 'SettingsDeliveryCtrl',
        controllerAs: 'vm'
      })
      .state('main.reservationsSettings',{
        url: '/reservations',
        templateUrl: 'app/main/settings/reservations/reservations.html',
        controller: 'SettingsReservationsCtrl',
        controllerAs: 'vm'
      })
      .state('main.paymentsSettings', {
        url: '/payments',
        templateUrl: 'app/main/settings/payments/payments.html',
        controller: 'SettingsPaymentsCtrl',
        controllerAs: 'vm'
      })
      .state('main.domainSettings', {
        url: '/domain',
        templateUrl: 'app/main/settings/domain/domain.html',
        controller: 'SettingsDomainCtrl',
        controllerAs: 'vm'
      })
      .state('main.integration', {
        url: '/integration',
        templateUrl: 'app/main/settings/integration/integration.html',
        controller: 'SettingsIntegrationCtrl',
        controllerAs: 'vm'
      });
  });
