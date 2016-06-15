'use strict';

angular.module('accountAdminApp')
  .controller('ReservationsWeekCtrl', function ($scope) {
    $scope.tableWidth = document.querySelector('.calendar-widget').clientWidth - 30;
    $scope.firstColWidth = 68;
    $scope.colWidth = Math.floor(($scope.tableWidth - $scope.firstColWidth) / 7);

    $scope.weekdays = { sun: 1, mon: 2, tue: 3, wed: 4, thu:5, fri: 6, sat: 7 };

    var mult = 35, // this is the cell-height for an hour
        h = new Date().getHours(),
        m = new Date().getMinutes(),
        w = new Date().getDay() + 1,
        t = h + (m / 60);

    $scope.rulerPos = {
      x: $scope.firstColWidth + $scope.colWidth * w - $scope.colWidth - 5, // 5px get the circle centered
      y: mult * t + 35 + 'px' // 35px is the height is the first unused row
    }

    var calWeek = document.querySelector('div.overflow'),
        calOverflowHeight = calWeek.clientHeight,
        calHeight = document.querySelector('.overflow > .table').clientHeight;

    setTimeout(function () {
      calWeek.scrollTop = $scope.rulerPos.y.replace('px','') - (calOverflowHeight/2);
    }, 0)

  });
