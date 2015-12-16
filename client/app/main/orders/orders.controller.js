'use strict';

angular.module('userAdminApp')
  .controller('OrdersCtrl', function ($scope) {
    $scope.pageTitle = 'Orders';
    $scope.orders = [
      { customer: 'Blake Lively', type: 'Pickup', number: '123456', amount: 191.21, status: 'New', selection: '1' },
      { customer: 'Lacky Bively', type: 'Delivery', number: '321654', amount: 191.22, status: 'In Progress', selection: '1' },
      { customer: 'Blade Likely', type: 'Pickup', number: '654321', amount: 191.23, status: 'Cancelled', selection: '1' },
      { customer: 'Blase Vilely', type: 'Pickup', number: '456123', amount: 191.24, status: 'Cancelled', selection: '1' },
      { customer: 'Drake Bravely', type: 'Delivery', number: '321456', amount: 191.25, status: 'Fulfilled', selection: '1' }
    ];

    $scope.orderActions = [
      { id: '1', name: 'All Actions'},
      { id: '2', name: 'Edit Order'},
      { id: '3', name: 'Start Progress'},
      { id: '4', name: 'Cancel Order'},
      { id: '5', name: 'Fulfill Order'},
      { id: '6', name: 'Add Customer'}
    ];
  });
