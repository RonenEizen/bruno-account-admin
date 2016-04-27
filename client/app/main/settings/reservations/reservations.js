'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider, $urlRouterProvider) {
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
        url: '/:_id/edit',
        templateUrl: 'app/main/settings/reservations/tableModal.html'
      });
    $urlRouterProvider
      .when('/settings/reservations/1', '/settings/reservations/1/edit');
  });
