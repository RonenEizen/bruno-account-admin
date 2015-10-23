'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.reservations', {
        url: '/reservations',
        templateUrl: 'app/main/reservations/reservations.html',
        controller: 'ReservationsCtrl'
      });
  });