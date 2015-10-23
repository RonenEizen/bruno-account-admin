'use strict';

angular.module('userAdminApp')
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('main.settings', {
			abstract: true,
			url: '/settings',
			templateUrl: 'app/main/settings/settings.html'
		})
		.state('main.settings.business-info', {
			url: '/business-info',
			templateUrl: 'app/main/settings/business-info/business-info.html',
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
		.state('main.settings.reservations', {
			url: '/reservations',
			templateUrl: 'app/main/settings/reservations/reservations.html',
			controller: 'ReservationsCtrl'
		})
		.state('main.settings.payments', {
			url: '/payments',
			templateUrl: 'app/main/settings/payments/payments.html',
			controller: 'PaymentsCtrl'
		})
		.state('main.settings.domain', {
			url: '/domain',
			templateUrl: 'app/main/settings/domain/domain.html',
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