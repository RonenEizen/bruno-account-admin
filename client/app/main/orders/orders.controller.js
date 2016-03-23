'use strict';

angular.module('accountAdminApp')
  .controller('OrdersCtrl', function($scope, Modal) {
    $scope.pageTitle = 'Orders';

    $scope.orders = $scope.main.orders;
    $scope.customers = $scope.main.customers;

    // ORDERS: Sets class to rows based on order status
    function setStatus(index) {
      return this.orderStatus[index].toLowerCase().replace(/\s+/g, '');
    };

    $scope.createOrder = function() {
      var modalContent = {
        modal: {
          html: 'addOrderModal.html',
          object: { owner: '', items: [] }
        }
      };

      Modal.openModal(modalContent).result.then(function(createdOrder) {
        console.log('modal success', createdOrder); //run if save is hit
        // should look like OrderService.add(createdOrder);
        $scope.orders.push(createdOrder);
      }, function() {
        console.log('modal dismissed!'); //run if cancel is hit
      });
    };

    $scope.viewOrder = function(index) {
      var modalContent = {
        modal: {
          html: 'orderModal.html',
          object: $scope.orders[index]
        }
      };

      Modal.openModal(modalContent).result.then(function(createdOrder) {
        console.log('modal success', createdOrder); //run if save is hit
        // should look like OrderService.add(createdOrder);
        $scope.orders.push(createdOrder);
      }, function() {
        console.log('modal dismissed!'); //run if cancel is hit
      });
    };

    $scope.customerName = function (ownerID) {
      var name = '';
      $scope.main.customers.forEach(function (cust) {
        if (ownerID === cust._id) {
          name = cust.fname + ' ' + cust.lname;
        }
      })
      return name;
    }

    // Columns
    $scope.displayColumns = {
      number: true,
      customer: true,
      type: true,
      amount: true,
      status: true
    };
    $scope.showColumnPicker = function() {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // Filters
    $scope.openFilter = {
      number: false,
      customer: false,
      type: false,
      amount: false,
      status: false
    };
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
