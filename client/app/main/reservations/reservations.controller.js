'use strict';

angular.module('userAdminApp')
  .controller('ReservationsCtrl', function ($scope, $interval) {
    $scope.pageTitle = 'Reservations';

    // sets current tab
    $scope.view = 'day';

    // this should update time every second
    $scope.currentDate = Date;
    $interval(function() {}, 1000);
  });
