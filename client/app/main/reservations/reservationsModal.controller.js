'use strict';

angular.module('accountAdminApp')
  .controller('ReservationsModalCtrl', function ($scope, ReservationService, modalObject, modalState) {

    $scope.reservations = ReservationService.reservations;
    $scope.object = modalObject;
    $scope.action = modalState;

    // Alerts
    $scope.alerts = [
      { type: 'warning', msg: '<i class="fa fa-exclamation-circle"></i>Table not available. change date, time or number of seats' },
    ];
    $scope.closeAlert = function(index) { $scope.alerts.splice(index, 1); };
  });
