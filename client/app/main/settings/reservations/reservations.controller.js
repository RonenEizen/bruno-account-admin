'use strict';

angular.module('accountAdminApp')
  .controller('SettingsReservationsCtrl', function ($scope, SettingsService, Modal) {
    $scope.pageTitle = 'Reservations';

    $scope.reservations = SettingsService.reservations;;

    // Modal calls
    $scope.createTableModal = Modal.createTableModal;
    $scope.seatingModal = Modal.seatingModal;
    $scope.tableModal = Modal.tableModal;
  });
