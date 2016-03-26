'use strict';

angular.module('accountAdminApp')
  .controller('OrdersCtrl', function($scope, OrderService) {
    $scope.pageTitle = 'Orders';

    $scope.orders = $scope.main.orders;
    $scope.customers = $scope.main.customers;
    $scope.modal = $scope.main.modal;

    // ORDERS: Sets class to rows based on order status
    function setStatus(index) {
      return this.orderStatus[index].toLowerCase().replace(/\s+/g, '');
    };

    $scope.createOrder = function() {
      var scope = {
          modal: {
            html: 'addOrderModal.html',
            object: { owner: '', items: [] }
        }
      };

      $scope.modal(scope)
        .result.then(function(newOrder) { // run if close is hit
          console.log(newOrder);
          OrderService.add(newOrder);
        }, function(message) { //run if dismiss is hit
          console.log(message);
        });
    };

    $scope.viewOrder = function(index) {
      var options = {
        modal: {
          html: 'orderModal.html',
          object: angular.copy($scope.orders[index])
        }
      };

      $scope.modal(options)
        .result.then(function(createdOrder) {
          console.log('modal success', createdOrder); //run if save is hit
          // should look like OrderService.add(createdOrder);
          $scope.orders.push(createdOrder);
        }, function() {
          console.log('modal dismissed!');
        });
    };

    // this function gets data from a customer ID
    $scope.customerData = function (ownerID, query) {
      let q = query
      let a

      $scope.main.customers.forEach(function (cust) {
        if (ownerID === cust._id) {
          if (query === 'name')
            a = cust.fname + ' ' + cust.lname;
          else
            a = cust[q]
        }
      })

      return a
    }

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
