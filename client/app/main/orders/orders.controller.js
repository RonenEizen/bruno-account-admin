'use strict';

angular.module('userAdminApp')
  .controller('OrdersCtrl', function ($scope, $log) {
    $scope.pageTitle = 'Orders';

    // Columns to be displayed
    $scope.showColumnPicker = function () {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };
    $scope.displayColumns = { number: true, customer: true, type: true, amount: true, status: true };

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

    // Sets class to rows based on order status
    $scope.setStatus = function (index) {
      return $scope.orderStatus[index].toLowerCase().replace(/\s+/g, '');
    };

    // FAKE DATA
    $scope.editing = {
      edit: false,
      number: '037658',
      customer: 'Blake Lively',
      homePhone: '(718) 566-7878',
      mobilePhone: '(718) 566-7878',
      addr: '1885 Crawford Dr. Pleasant Hill, CA 94113',
      email: 'bively@gmail.com',
      workEmail: 'bively@yahoo.com',
      type: 0,
      amount: 191.21,
      status: 2
    };
    $scope.orderType = [ 'Pickup', 'Delivery' ];
    $scope.orderStatus = [ 'Cancelled', 'New', 'In Progress', 'Fulfilled' ];
    $scope.orders = [
      { customer: 'Blade Likely',   type: 'Pickup',    number: '654321',  amount: 191.23,  status: 0 },
      { customer: 'Blase Vilely',   type: 'Pickup',    number: '456123',  amount: 191.24,  status: 0 },
      { customer: 'Blake Lively',   type: 'Pickup',    number: '123456',  amount: 191.21,  status: 1 },
      { customer: 'Lacky Bively',   type: 'Delivery',  number: '321654',  amount: 191.22,  status: 2 },
      { customer: 'Drake Bravely',  type: 'Delivery',  number: '321456',  amount: 191.25,  status: 3 }
    ];
  });
