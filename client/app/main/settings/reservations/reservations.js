'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.reservationsSettings.create', {
        url: '/create',
        templateUrl: 'app/main/settings/reservations/createTableModal.html'
      })
      .state('main.reservationsSettings.seating', {
        url: '/seating',
        templateUrl: 'app/main/settings/reservations/seatingModal.html'
      })
      .state('main.reservationsSettings.table', {
        url: '/:_id',
        templateUrl: 'app/main/settings/reservations/tableModal.html'
      })
  });
