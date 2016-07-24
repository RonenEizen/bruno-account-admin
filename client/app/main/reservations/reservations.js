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
        controller: 'ReservationsDayCtrl'
      })
      .state('main.reservations.day.create', {
        url: '/create',
        onEnter: function (Modal, ReservationService, $stateParams) {
          Modal.createReservationModal()
        }
      })
      .state('main.reservations.day.reservation', {
        url: '/:_id/:state',
        onEnter: function (Modal, ReservationService, $stateParams) {
          Modal.reservationModal(_.find(ReservationService.reservations, { '_id': $stateParams.id }), $stateParams.state)
        }
      })

      .state('main.reservations.week', {
        url: '/week',
        templateUrl: 'app/main/reservations/reservations-week.html',
        controller: 'ReservationsWeekCtrl'
      })
      .state('main.reservations.week.create', {
        url: '/create',
        onEnter: function (Modal, ReservationService, $stateParams) {
          Modal.createReservationModal()
        }
      })
      .state('main.reservations.week.reservation', {
        url: '/:_id/:state',
        onEnter: function (Modal, ReservationService, $stateParams) {
          Modal.reservationModal(_.find(ReservationService.reservations, { '_id': $stateParams.id }), $stateParams.state)
        }
      })

    $urlRouterProvider
      .when('/reservations', '/reservations/day')
      .when('/reservations/day/:_id', '/reservations/day/:_id/view')
      .when('/reservations/week/:_id', '/reservations/week/:_id/view')
  });
