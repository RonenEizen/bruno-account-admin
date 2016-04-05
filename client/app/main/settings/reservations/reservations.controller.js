'use strict';

angular.module('accountAdminApp')
  .controller('SettingsReservationsCtrl', function ($scope) {
    $scope.pageTitle = 'Reservations';

    $scope.reservations = $scope.main.reservationSettings;
  });
