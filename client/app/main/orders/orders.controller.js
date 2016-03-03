'use strict';

angular.module('accountAdminApp')
  .controller('OrdersCtrl', function ($scope) {
    $scope.pageTitle = 'Orders';

    // Columns
    $scope.displayColumns = { number: true, customer: true, type: true, amount: true, status: true };
    $scope.showColumnPicker = function () {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // Filters
    $scope.openFilter = { number: false, customer: false, type: false, amount: false, status: false };
    $scope.activeFilter = undefined;
    $scope.toggleFilter = function (filterName) {
      if ($scope.openFilter[filterName]) {
        $scope.openFilter[filterName] = false;
      } else {
        for (var x in $scope.openFilter) { $scope.openFilter[x] = false; }
        $scope.invisibleLayer = true;
        $scope.openFilter[filterName] = true;
      }
    };

    // Ordering columns by
    $scope.clickedHeader = '';

    // Load More Rows
    $scope.displayingOrders = 3; // sets the initial limit of displaying rows
    $scope.loadMore = true; // true if there're more rows to load
    $scope.loadMore = function () {
      var increment = 3;
      if ($scope.displayingOrders < $scope.orders.length) {
        $scope.displayingOrders += increment;
        if ($scope.displayingOrders >= $scope.orders.length) {
          $scope.loadMore = false;
        }
      }
    };
  });
