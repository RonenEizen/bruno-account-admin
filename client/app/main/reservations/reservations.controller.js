'use strict';

angular.module('accountAdminApp')
  .controller('ReservationsCtrl', function ($scope, $interval, $log, $location, Auth) {
    $scope.$parent.pageTitle = 'Reservations';

    // sets current tab
    $scope.$parent.view = $location.$$url.replace('/reservations/', '');
    $scope.setView = function (view) {
      $scope.$parent.view = view;
      $location.$$url = '/reservations/' + view;
    };

    // set and update time every second
    $scope.currentDate = Date;
    $interval(function() {}, 1000);

    //DAY VIEW
    // set the ruler position
    $scope.leftPos = '450px'; // TODO: position needs to change according to time of day (0 to 6300px)

    // WEEK VIEW
    // set column width
    if (document.getElementsByClassName('table').length > 0) {
      $scope.tableWidth = document.querySelectorAll('.table')[0].clientWidth;
      $scope.firstColWidth = document.querySelectorAll('.table .thead .th:first-child')[0].clientWidth;
    }

    $scope.colWidth = Math.round((($scope.tableWidth - $scope.firstColWidth) / 7));
    $scope.weekdays = { sun: 1, mon: 2, tue: 3, wed: 4, thu:5, fri: 6, sat: 7 };
    $scope.rulerHPos = $scope.firstColWidth + $scope.colWidth * $scope.weekdays.tue - $scope.colWidth - 6; // 6px get the circle centered

    // calendar
    $scope.hours = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am' ];
    $scope.quarters = ['12am', '12:15am', '12:30am', '12:45am', '1am', '1:15am', '1:30am', '1:45am', '2am', '2:15am', '2:30am', '2:45am', '3am', '3:15am', '3:30am', '3:45am', '4am', '4:15am', '4:30am', '4:45am', '5am', '5:15am', '5:30am', '5:45am', '6am', '6:15am', '6:30am', '6:45am', '7am', '7:15am', '7:30am', '7:45am', '8am', '8:15am', '8:30am', '8:45am', '9am', '9:15am', '9:30am', '9:45am', '10am', '10:15am', '10:30am', '10:45am', '11am', '11:15am', '11:30am', '11:45am', '12pm', '12:15pm', '12:30pm', '12:45pm', '1pm', '1:15pm', '1:30pm', '1:45pm', '2pm', '2:15pm', '2:30pm', '2:45pm', '3pm', '3:15pm', '3:30pm', '3:45pm', '4pm', '4:15pm', '4:30pm', '4:45pm', '5pm', '5:15pm', '5:30pm', '5:45pm', '6pm', '6:15pm', '6:30pm', '6:45pm', '7pm', '7:15pm', '7:30pm', '7:45pm', '8pm', '8:15pm', '8:30pm', '8:45pm', '9pm', '9:15pm', '9:30pm', '9:45pm', '10pm', '10:15pm', '10:30pm', '10:45pm', '11pm', '11:15pm', '11:30pm', '11:45pm', '12am' ];
  });
