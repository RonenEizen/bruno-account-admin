'use strict';

angular.module('accountAdminApp')
  .controller('StatisticsCtrl', function ($scope) {
    $scope.pageTitle = 'Statistics';

    $scope.boxes = {
      orders: { collapsed: true, currentTab: 'types' },
      reservations: { collapsed: true, currentTab: 'trends' },
      payments: { collapsed: true, currentTab: 'sources' }
    };

    // Columns
    $scope.displayColumns = { orders: true, reservations: true, payments: true };
    $scope.showColumnPicker = function () {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // When dragging and dropping stuff around
    $scope.rearranging = false;

    $scope.ordersStats = {
      trends: {
        labels: ['February', 'March', 'April', 'May', 'June', 'July'],
        series: ['2015', '2016'],
        data: [[65, 59, 80, 81, 56, 55], [28, 48, 40, 19, 86, 27] ]
      },
      time: {
        labels: ['11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am'],
        series: ['2015', '2016'],
        data: [[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]]
      },
      types: {
        labels: ['Pickup', 'Delivery', 'Eat In'],
        series: ['2015', '2016'],
        data: [[20, 30, 50], [45, 25, 30]]
      }
    };

    $scope.reservationsStats = {
      trends: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        series: ['2016'],
        data: [[165, 159, 180, 188]]
      },
      time: {
        labels: ['11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am'],
        series: ['2016'],
        data: [[20, 30, 26, 22, 12, 6, 10, 20, 36, 46, 40, 30, 20, 16]]
      },
      seating: {
        labels: ['11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am'],
        series: ['2016'],
        data: [[10, 15, 13, 11, 6, 3, 5, 10, 18, 23, 20, 15, 10, 8]]
      }
    };

    $scope.paymentsStats = {
      sources: {
        labels: ['Restaurant Wbsite', 'In-person', 'Seamless', 'Grubhub'],
        series: ['2013', '2014', '2015', '2016'],
        data: [[165, 159, 180, 188], [165, 159, 180, 188], [165, 159, 180, 188], [165, 159, 180, 188]]
      },
      types: {
        labels: ['Credit Card', 'Debit Card', 'PayPal', 'Cash'],
        series: ['2016'],
        data: [[106, 60, 43, 77]]
      }
    };

    $scope.chartOptions = {
      scaleShowVerticalLines: false,
      bezierCurve: false,
      pointDotRadius: 0,
      pointDotStrokeWidth: 0,
      datasetStrokeWidth: 3,
      datasetFill: false,
      barValueSpacing : 10
    };
  });
