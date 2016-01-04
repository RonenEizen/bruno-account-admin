'use strict';

angular.module('userAdminApp')
  .controller('ReservationsCtrl', function ($scope, $interval, $log, $location) {
    $scope.$parent.pageTitle = 'Reservations';

    // sets current tab
    $scope.$parent.view = $location.$$url.replace("/reservations/", "");
    $scope.setView = function (view) {
      $scope.$parent.view = view;
      $location.$$url = "/reservations/" + view;
    };

    // set and update time every second
    $scope.currentDate = Date;
    $interval(function() {}, 1000);

    //DAY VIEW
    // set the ruler position
    $scope.leftPos = '450px'; // TODO: position needs to change according to time of day (0 to 6300px)

    // WEEK VIEW
    // set column width
    $scope.tableWidth;
    if (document.getElementsByClassName('table').length > 0) {
      $scope.tableWidth = document.querySelectorAll(".table")[0].clientWidth;
    };

    $scope.colWidth = Math.round((($scope.tableWidth - 60)/7));
    $scope.weekdays = { sun: 1, mon: 2, tue: 3, wed: 4, thu:5, fri: 6, sat: 7 };
    $scope.rulerPos = ($scope.colWidth * $scope.weekdays['mon']) - ($scope.colWidth + 6);

    // calendar
    $scope.hours = ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM' ];
    $scope.quarters = ['12 AM', '12:15 AM', '12:30 AM', '12:45 AM', '1 AM', '1:15 AM', '1:30 AM', '1:45 AM', '2 AM', '2:15 AM', '2:30 AM', '2:45 AM', '3 AM', '3:15 AM', '3:30 AM', '3:45 AM', '4 AM', '4:15 AM', '4:30 AM', '4:45 AM', '5 AM', '5:15 AM', '5:30 AM', '5:45 AM', '6 AM', '6:15 AM', '6:30 AM', '6:45 AM', '7 AM', '7:15 AM', '7:30 AM', '7:45 AM', '8 AM', '8:15 AM', '8:30 AM', '8:45 AM', '9 AM', '9:15 AM', '9:30 AM', '9:45 AM', '10 AM', '10:15 AM', '10:30 AM', '10:45 AM', '11 AM', '11:15 AM', '11:30 AM', '11:45 AM', '12 PM', '12:15 PM', '12:30 PM', '12:45 PM', '1 PM', '1:15 PM', '1:30 PM', '1:45 PM', '2 PM', '2:15 PM', '2:30 PM', '2:45 PM', '3 PM', '3:15 PM', '3:30 PM', '3:45 PM', '4 PM', '4:15 PM', '4:30 PM', '4:45 PM', '5 PM', '5:15 PM', '5:30 PM', '5:45 PM', '6 PM', '6:15 PM', '6:30 PM', '6:45 PM', '7 PM', '7:15 PM', '7:30 PM', '7:45 PM', '8 PM', '8:15 PM', '8:30 PM', '8:45 PM', '9 PM', '9:15 PM', '9:30 PM', '9:45 PM', '10 PM', '10:15 PM', '10:30 PM', '10:45 PM', '11 PM', '11:15 PM', '11:30 PM', '11:45 PM', '12 AM' ];
  });
