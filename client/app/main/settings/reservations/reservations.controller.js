'use strict';

angular.module('accountAdminApp')
  .controller('SettingsReservationsCtrl', function ($scope, SettingsService) {
    $scope.pageTitle = 'Reservations';

    $scope.tables = SettingsService.reservations.tables;
    $scope.seating = SettingsService.reservations.seating;
  });
