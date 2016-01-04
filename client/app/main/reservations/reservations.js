'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.reservations', {
        abstract: true,
        url: '/reservations',
        templateUrl: 'app/main/reservations/reservations.html'
      })
      .state('main.reservations.day', {
        url: '/day',
        templateUrl: 'app/main/reservations/reservations-day.html',
        controller: 'ReservationsCtrl'
      })
      .state('main.reservations.week', {
        url: '/week',
        templateUrl: 'app/main/reservations/reservations-week.html',
        controller: 'ReservationsCtrl'
      })
      .state('main.reservations.month', {
        url: '/month',
        templateUrl: 'app/main/reservations/reservations-month.html',
        controller: 'ReservationsCtrl'
      });
    $urlRouterProvider.when('/reservations', '/reservations/day');
  });
