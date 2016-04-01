'use strict';

angular.module('accountAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.orders', {
        url: '/orders',
        templateUrl: 'app/main/orders/orders.html',
        controller: 'OrdersCtrl'
      })
      .state('main.orders.view', {
        url: '/view',
        templateUrl: 'app/main/orders/viewOrderModal.html',
        controller: 'OrdersCtrl',
        controllerAs: 'vm'
      })
      .state('main.orders.create', {
        url: '/create',
        templateUrl: 'app/main/orders/createOrderModal.html',
        controller: 'OrdersCtrl',
        controllerAs: 'vm'
      })
  });
