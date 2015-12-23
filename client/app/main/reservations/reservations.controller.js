'use strict';

angular.module('userAdminApp')
  .controller('ReservationsCtrl', function ($scope, $interval) {
    $scope.pageTitle = 'Reservations';

    $scope.view = 'day';

    // this should update time
    $scope.currentDate = Date;
    $interval(function() {}, 1000);
  });
