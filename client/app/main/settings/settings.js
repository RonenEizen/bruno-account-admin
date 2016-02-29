'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.settings', {
        abstract: true,
        //url: '/settings',
        templateUrl: 'app/main/settings/account/account.html'
      })
      .state('main.settings.account', {
        url: '/account',
        templateUrl: 'app/main/settings/account/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'vm'
      })
      .state('main.settings.business-info', {
        url: '/business-info',
        templateUrl: 'app/main/settings/business-info/business-info.html',
        controller: 'SettingsBusinessInfoCtrl'
      })
      .state('main.settings.users', {
        url: '/users',
        templateUrl: 'app/main/settings/users/users.html',
        controller: 'SettingsUsersCtrl'
      })
      .state('main.settings.roles', {
        url: '/roles',
        templateUrl: 'app/main/settings/roles/roles.html',
        controller: 'SettingsRolesCtrl'
      })
      .state('main.settings.delivery', {
        url: '/delivery',
        templateUrl: 'app/main/settings/delivery/delivery.html',
        controller: 'SettingsDeliveryCtrl'
      })
      .state('main.settings.reservations',{
        url: '/reservations',
        templateUrl: 'app/main/settings/reservations/reservations.html',
        controller: 'SettingsReservationsCtrl'
      })
      .state('main.settings.payments', {
        url: '/payments',
        templateUrl: 'app/main/settings/payments/payments.html',
        controller: 'SettingsPaymentsCtrl'
      })
      .state('main.settings.domain', {
        url: '/domain',
        templateUrl: 'app/main/settings/domain/domain.html',
        controller: 'SettingsDomainCtrl'
      })
      .state('main.settings.integration', {
        url: '/integration',
        templateUrl: 'app/main/settings/integration/integration.html',
        controller: 'SettingsIntegrationCtrl'
      });

    $urlRouterProvider.when('/settings', '/business-info');
  });
