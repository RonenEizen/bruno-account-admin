'use strict'

angular.module('accountAdminApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.customers', {
        url: '/customers',
        templateUrl: 'app/main/customers/customers.html',
        controller: 'CustomersCtrl'
      })
      .state('main.customers.create', {
        url: '/create',
        onEnter: Modal => Modal.openModal('app/main/customers/create-customer-modal.html', 'CustomersModalCtrl')
      })
      .state('main.customers.customer', {
        url: '/:id?state',
        onEnter: (Modal, $stateParams) => Modal.openModal('app/main/customers/customer-modal.html', 'CustomersModalCtrl', $stateParams.id, $stateParams.state)
      })
  })
