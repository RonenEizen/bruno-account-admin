'use strict';

angular.module('accountAdminApp')
  .controller('DashboardCtrl', function ($scope, $http, $interval) {
    $scope.pageTitle = 'Dashboard';

    // Columns
    $scope.displayColumns = { orders: true, reservations: true, campaigns: true, updates: true, trends: true };
    $scope.collapsed = { orders: false, reservations: false, campaigns: false, updates: false, trends: false };
    $scope.showColumnPicker = function () {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // When dragging and dropping stuff around
    $scope.rearranging = false;

    // set and update time every second
    $scope.currentDate = Date;
    $interval(function() {}, 1000);

    // Dashboard alerts
    $scope.alerts = [
      { type: 'warning', msg: 'Your domain <strong>rodeo.chefbr.uno</strong> is expiring. Visit <a href="/settings/domain">Domain</a> to update it.' },
      { type: 'danger', msg: 'Your domain <strong>rodeo.chefbr.uno</strong> is expiring. Visit <a href="/settings/domain">Domain</a> to update it.' },
      { type: 'success', msg: 'Your domain <strong>rodeo.chefbr.uno</strong> is expiring. Visit <a href="/settings/domain">Domain</a> to update it.' },
      { type: 'info', msg: 'Your domain <strong>rodeo.chefbr.uno</strong> is expiring. Visit <a href="/settings/domain">Domain</a> to update it.' },
    ];
    $scope.closeAlert = function(index) { $scope.alerts.splice(index, 1); };

    // Reservations Block
    $scope.quarters = ['12 AM', '12:15 AM', '12:30 AM', '12:45 AM', '1 AM', '1:15 AM', '1:30 AM', '1:45 AM', '2 AM', '2:15 AM', '2:30 AM', '2:45 AM', '3 AM', '3:15 AM', '3:30 AM', '3:45 AM', '4 AM', '4:15 AM', '4:30 AM', '4:45 AM', '5 AM', '5:15 AM', '5:30 AM', '5:45 AM', '6 AM', '6:15 AM', '6:30 AM', '6:45 AM', '7 AM', '7:15 AM', '7:30 AM', '7:45 AM', '8 AM', '8:15 AM', '8:30 AM', '8:45 AM', '9 AM', '9:15 AM', '9:30 AM', '9:45 AM', '10 AM', '10:15 AM', '10:30 AM', '10:45 AM', '11 AM', '11:15 AM', '11:30 AM', '11:45 AM', '12 PM', '12:15 PM', '12:30 PM', '12:45 PM', '1 PM', '1:15 PM', '1:30 PM', '1:45 PM', '2 PM', '2:15 PM', '2:30 PM', '2:45 PM', '3 PM', '3:15 PM', '3:30 PM', '3:45 PM', '4 PM', '4:15 PM', '4:30 PM', '4:45 PM', '5 PM', '5:15 PM', '5:30 PM', '5:45 PM', '6 PM', '6:15 PM', '6:30 PM', '6:45 PM', '7 PM', '7:15 PM', '7:30 PM', '7:45 PM', '8 PM', '8:15 PM', '8:30 PM', '8:45 PM', '9 PM', '9:15 PM', '9:30 PM', '9:45 PM', '10 PM', '10:15 PM', '10:30 PM', '10:45 PM', '11 PM', '11:15 PM', '11:30 PM', '11:45 PM', '12 AM' ];

    // Masonry
    $scope.sort = function () {

    };
  });
