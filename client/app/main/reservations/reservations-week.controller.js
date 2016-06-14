'use strict';

angular.module('accountAdminApp')
  .controller('ReservationsWeekCtrl', function ($scope, $interval, $location) {
    // set column width
    if (document.getElementsByClassName('table').length > 0) {
      $scope.tableWidth = document.querySelectorAll('.table')[0].clientWidth;
      $scope.firstColWidth = document.querySelectorAll('.table .thead .th:first-child')[0].clientWidth;
    };

    $scope.colWidth = Math.round((($scope.tableWidth - $scope.firstColWidth) / 7));
    $scope.weekdays = { sun: 1, mon: 2, tue: 3, wed: 4, thu:5, fri: 6, sat: 7 };
  });
