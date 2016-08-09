'use strict'

angular.module('accountAdminApp')
  .controller('SettingsReservationsCtrl', function ($scope, ReservationsSettingsService) {
    $scope.pageTitle = 'Reservations'

    $scope.tables = ReservationsSettingsService.reservations.tables
    $scope.seating = ReservationsSettingsService.reservations.seating
  })
