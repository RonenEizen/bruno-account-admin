'use strict'

angular.module('accountAdminApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.accountSettings', {
        url: '/settings/account',
        templateUrl: 'app/main/settings/account/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'vm'
      })
      .state('main.businessInfo', {
        url: '/settings/business-info',
        templateUrl: 'app/main/settings/business-info/business-info.html',
        controller: 'SettingsBusinessInfoCtrl',
        controllerAs: 'vm'
      })
      .state('main.users', {
        url: '/settings/users',
        templateUrl: 'app/main/settings/users/users.html',
        controller: 'SettingsUsersCtrl',
        controllerAs: 'vm'
      })
      .state('main.roles', {
        url: '/settings/roles',
        templateUrl: 'app/main/settings/roles/roles.html',
        controller: 'SettingsRolesCtrl',
        controllerAs: 'vm'
      })
      .state('main.deliverySettings', {
        url: '/settings/delivery',
        templateUrl: 'app/main/settings/delivery/delivery.html',
        controller: 'SettingsDeliveryCtrl',
        controllerAs: 'vm'
      })
      .state('main.reservationsSettings',{
        url: '/settings/reservations',
        templateUrl: 'app/main/settings/reservations/reservations.html',
        controller: 'SettingsReservationsCtrl',
        controllerAs: 'vm'
      })
      .state('main.paymentsSettings', {
        url: '/settings/payments',
        templateUrl: 'app/main/settings/payments/payments.html',
        controller: 'SettingsPaymentsCtrl',
        controllerAs: 'vm'
      })
      .state('main.domainSettings', {
        url: '/settings/domain',
        templateUrl: 'app/main/settings/domain/domain.html',
        controller: 'SettingsDomainCtrl',
        controllerAs: 'vm'
      })
      .state('main.integration', {
        url: '/settings/integration',
        templateUrl: 'app/main/settings/integration/integration.html',
        controller: 'SettingsIntegrationCtrl',
        controllerAs: 'vm'
      })
    $urlRouterProvider
      .when('/settings', '/settings/business')
  })
