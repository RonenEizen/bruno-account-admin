'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.reservationsSetting.view',{
        url: '/view',
        templateUrl: 'app/main/settings/reservations/tableModal.html',
        controller: 'SettingsReservationsCtrl',
        controllerAs: 'vm'
      })
      .state('main.reservationsSetting.create',{
        url: '/create',
        templateUrl: 'app/main/settings/reservations/createTableModal.html',
        controller: 'SettingsReservationsCtrl',
        controllerAs: 'vm'
      })
      .state('main.reservationsSetting.seating',{
        url: '/seating',
        templateUrl: 'app/main/settings/reservations/seatingModal.html',
        controller: 'SettingsReservationsCtrl',
        controllerAs: 'vm'
      })
  });
