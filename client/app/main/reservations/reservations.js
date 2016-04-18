'use strict';

angular.module('accountAdminApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.reservations', {
        abstract: true,
        url: '/reservations',
        templateUrl: 'app/main/reservations/reservations.html',
        controller: 'ReservationsCtrl'
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
      .state('main.reservations.create', {
        url: '/create',
        views: {
          modal: {
            templateUrl: 'app/main/reservations/createReservationModal.html'
          }
        }
      })
      .state('main.reservations.reservation', {
        abstract: true,
        url: '/:_id',
        views: {
          modal: {
            templateUrl: 'app/main/reservations/reservationModal.html'
          }
        }
      })
      .state('main.reservations.reservation.view', {
        url: '/view',
        templateUrl: 'app/main/reservations/viewReservationModal.html'
      })
      .state('main.reservations.reservation.edit', {
        url: '/edit',
        templateUrl: 'app/main/reservations/editReservationModal.html'
      })
      .state('main.reservations.reservation.remove', {
        url: '/remove',
        templateUrl: 'app/main/reservations/removeReservationModal.html'
      });
    $urlRouterProvider
      .when('/reservations', '/reservations/day')
      .when('/reservations/:_id', '/reservations/:_id/view');
  });
