'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.reservations', {
        url: '/reservations',
        templateUrl: 'app/main/reservations/reservations.html',
        controller: 'ReservationsCtrl'
      })
      .state('main.reservations.edit', {
        url: '/reservations/edit',
        templateUrl: 'app/main/reservations/reservations.edit.html',
        controller: 'ReservationsCtrl'
      });
  });
