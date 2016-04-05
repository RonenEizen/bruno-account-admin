'use strict';

angular.module('accountAdminApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.orders', {
        url: '/orders',
        templateUrl: 'app/main/orders/orders.html',
        controller: 'OrdersCtrl'
      })
      .state('main.orders.create', {
        url: '/create',
        templateUrl: 'app/main/orders/createOrderModal.html'
      })
      .state('main.orders.order', {
        abstract: true,
        url: '/:_id',
        templateUrl: 'app/main/orders/orderModal.html'
      })
      .state('main.orders.order.view', {
        url: '/view',
        templateUrl: 'app/main/orders/viewOrderModal.html'
      })
      .state('main.orders.order.edit', {
        url: '/edit',
        templateUrl: 'app/main/orders/editOrderModal.html'
      })
    $urlRouterProvider
      .when('/orders/:_id', '/orders/:_id/view')
  });
