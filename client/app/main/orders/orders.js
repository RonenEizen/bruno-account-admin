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
        onEnter: function (Modal) {
          Modal.createOrderModal()
        }
      })
      .state('main.orders.order', {
        url: '/:id/:state',
        onEnter: function (Modal, OrderService, $stateParams) {
          Modal.orderModal(_.find(OrderService.orders, { '_id': $stateParams.id }), $stateParams.state)
        }
      })
    $urlRouterProvider
      .when('/orders/:id', '/orders/:id/view')
  });
