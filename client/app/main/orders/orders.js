'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.orders', {
        url: '/orders',
        templateUrl: 'app/main/orders/orders.html',
        controller: 'OrdersCtrl'
      })
      .state('main.orders.modal', {
        url: '/:orderId',
        templateUrl: 'app/main/orders/orders.modal.html',
        controller: 'OrdersCtrl'
      });
  });
