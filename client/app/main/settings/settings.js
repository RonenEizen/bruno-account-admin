'use strict';

angular.module('userAdminApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.settings', {
        abstract: true,
        url: '/settings',
        templateUrl: 'app/main/settings/settings.html'
      })
      .state('main.settings.business-info', {
        url: '/business-info',
        templateUrl: 'app/main/settings/business-info/business-info.html',
        controller: 'SettingsBusinessInfoCtrl'
      })
      .state('main.settings.users-and-roles', {
        url: '/users-and-roles',
        templateUrl: 'app/main/settings/users-and-roles/users-and-roles.html',
        controller: 'SettingsUsersAndRolesCtrl'
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

    $urlRouterProvider.when('/settings', '/settings/business-info');
  });
