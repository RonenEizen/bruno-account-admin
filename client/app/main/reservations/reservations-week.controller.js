'use strict';

angular.module('accountAdminApp')
  .controller('ReservationsWeekCtrl', function ($scope) {
    $scope.tableWidth = document.querySelector('.calendar-widget').clientWidth - 30;
    $scope.firstColWidth = 68;
    $scope.colWidth = Math.floor(($scope.tableWidth - $scope.firstColWidth) / 7);

    $scope.weekdays = { sun: 1, mon: 2, tue: 3, wed: 4, thu:5, fri: 6, sat: 7 };

    $scope.rulerXPos = $scope.firstColWidth + $scope.colWidth * $scope.weekdays.sat - $scope.colWidth - 5; // 5px get the circle centered
    $scope.rulerYPos = 180
  });
