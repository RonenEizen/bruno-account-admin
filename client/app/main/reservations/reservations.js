'use strict'

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
        onEnter: Modal => Modal.openModal('app/main/reservations/create-reservation-modal.html', 'ReservationsModalCtrl')
      })
      .state('main.reservations.day.reservation', {
        url: '/:id?state',
        onEnter: (Modal, $stateParams) => Modal.openModal('app/main/reservations/reservation-modal.html', 'ReservationsModalCtrl', $stateParams.id, $stateParams.state)
      })

      .state('main.reservations.week', {
        url: '/week',
        templateUrl: 'app/main/reservations/reservations-week.html',
        controller: 'ReservationsWeekCtrl'
      })
      .state('main.reservations.week.create', {
        url: '/create',
        onEnter: Modal => Modal.openModal('app/main/reservations/create-reservation-modal.html', 'ReservationsModalCtrl')
      })
      .state('main.reservations.week.reservation', {
        url: '/:id?state',
        onEnter: (Modal, $stateParams) => Modal.openModal('app/main/reservations/reservation-modal.html', 'ReservationsModalCtrl', $stateParams.id, $stateParams.state)
      })

    $urlRouterProvider
      .when('/reservations', '/reservations/day')
  })
