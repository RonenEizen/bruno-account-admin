'use strict'

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
        onEnter: Modal => Modal.openModal('app/main/orders/create-order-modal.html', 'OrdersModalCtrl', {items:[]})
      })
      .state('main.orders.order', {
        url: '/:id?state',
        onEnter: (Modal, $stateParams) => Modal.openModal('app/main/orders/order-modal.html', 'OrdersModalCtrl', $stateParams.id, $stateParams.state)
      })
  })
