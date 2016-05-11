'use strict';

angular.module('accountAdminApp')
  .controller('OrdersCtrl', function($scope, OrderService, $filter) {
    $scope.pageTitle = 'Orders';

    $scope.foodItems = $scope.main.foodItems;
    $scope.orders = $scope.main.orders;
    $scope.customers = $scope.main.customers;
    $scope.states = $scope.main.states;

    // THIS OBJECT IS LOADED INTO MODALS
    $scope.object = {
      _id: '654321',
      owner: '1',
      createdAt: new Date('2016-05-01T10:41:00Z'),
      updatedAt: new Date('2016-05-01T10:41:00Z'),
      type: 'pickup',
      status: 'new',
      items: [{
        _id: '1',
        category: 'Beverages',
        name: 'Coca-Cola',
        qty: 2,
        price: 1.10
      }, {
        _id: '2',
        category: 'Hamburgers',
        name: 'Big Burger',
        qty: 3,
        price: 5.5
      }, {
        _id: '3',
        category: 'Snacks',
        name: 'Fries',
        qty: 5,
        price: 2.15
      }],
      total: 29.45
    }

    // ORDERS: Sets class to rows based on order status
    $scope.setStatus = function (status) {
      return status.toLowerCase().replace(/\s+/g, '');
    }

    // this function gets data from a customer ID
    $scope.customerData = function (ownerID, query) {
      let q = query;
      let a;

      $scope.main.customers.forEach(function (cust) {
        if (ownerID === cust._id) {
          if (q === 'name') { a = cust.fname + ' ' + cust.lname; }
          else if (q === 'homePhone' || query === 'mobilePhone') { a = $filter('phone')(cust[q])}
          else if (q === 'addr') { a = cust['addr'] + ', ' + cust['state'] + ' ' + cust['zip'] }
          else { a = cust[q]; }
        }
      });
      return a;
    };

    // Columns
    $scope.displayColumns = { number: true, customer: true, type: true, amount: true, status: true };
    $scope.showColumnPicker = function() {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // Filters
    $scope.openFilter = { number: false, customer: false, type: false, amount: false, status: false };
    $scope.activeFilter = undefined;
    $scope.toggleFilter = function(filterName) {
      if ($scope.openFilter[filterName]) {
        $scope.openFilter[filterName] = false;
      } else {
        for (var x in $scope.openFilter) {
          $scope.openFilter[x] = false;
        }
        $scope.invisibleLayer = true;
        $scope.openFilter[filterName] = true;
      }
    };

    // Ordering columns by
    $scope.clickedHeader = '';

    // Load More Rows
    $scope.displayingOrders = 3; // sets the initial limit of displaying rows
    $scope.loadMore = true; // true if there're more rows to load
    $scope.loadMore = function() {
      var increment = 3;
      if ($scope.displayingOrders < $scope.orders.length) {
        $scope.displayingOrders += increment;
        if ($scope.displayingOrders >= $scope.orders.length) {
          $scope.loadMore = false;
        }
      }
    };
  });
