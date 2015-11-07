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
        abstract: true,
        template: '<div data-ui-view></div>'
      })
      .state('main.settings.business-info.preview', {
        url: '/business-info',
        templateUrl: 'app/main/settings/business-info/business-info.html',
        controller: 'BusinessInfoCtrl'
      })
      .state('main.settings.business-info.edit', {
        url: '/business-info/edit',
        templateUrl: 'app/main/settings/business-info/business-info.edit.html',
        controller: 'BusinessInfoCtrl'
      })
      .state('main.settings.users-and-roles', {
        url: '/users-and-roles',
        templateUrl: 'app/main/settings/users-and-roles/users-and-roles.html',
        controller: 'UsersAndRolesCtrl'
      })
      .state('main.settings.delivery', {
        url: '/delivery',
        templateUrl: 'app/main/settings/delivery/delivery.html',
        controller: 'DeliveryCtrl'
      })


      .state('main.settings.reservations',{
        abstract: true,
        template: '<div data-ui-view></div>'
      })
      .state('main.settings.reservations.preview', {
        url: '/reservations',
        templateUrl: 'app/main/settings/reservations/reservations.html',
        controller: 'ReservationsCtrl'
      })
      .state('main.settings.reservations.edit', {
        url: '/reservations/edit',
        templateUrl: 'app/main/settings/reservations/reservations.edit.html',
        controller: 'ReservationsCtrl'
      })

      .state('main.settings.payments',{
        abstract: true,
        template: '<div data-ui-view></div>'
      })
      .state('main.settings.payments.preview', {
        url: '/payments',
        templateUrl: 'app/main/settings/payments/payments.html',
        controller: 'PaymentsCtrl'
      })
      .state('main.settings.payments.edit', {
        url: '/payments/edit',
        templateUrl: 'app/main/settings/payments/payments.edit.html',
        controller: 'PaymentsCtrl'
      })

      .state('main.settings.domain',{
        abstract: true,
        template: '<div data-ui-view></div>'
      })
      .state('main.settings.domain.preview', {
        url: '/domain',
        templateUrl: 'app/main/settings/domain/domain.html',
        controller: 'DomainCtrl'
      })
      .state('main.settings.domain.edit', {
        url: '/domain/edit',
        templateUrl: 'app/main/settings/domain/domain.edit.html',
        controller: 'DomainCtrl'
      })
      .state('main.settings.integration', {
        url: '/integration',
        templateUrl: 'app/main/settings/integration/integration.html',
        controller: 'IntegrationCtrl'
      })
      .state('main.settings.site-builder', {
        url: '/site-builder',
        templateUrl: 'app/main/settings/site-builder/site-builder.html',
        controller: 'SiteBuilderCtrl'
      });

    $urlRouterProvider.when('/settings', '/settings/business-info');
  });
