'use strict';

angular.module('accountAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.customers', {
        url: '/customers',
        templateUrl: 'app/main/customers/customers.html',
        controller: 'CustomersCtrl'
      })
      .state('main.customers.view', {
        url: '/view',
        templateUrl: 'app/main/customers/viewCustomerModal.html',
        controller: 'CustomersCtrl',
        controllerAs: 'vm'
      })
      .state('main.customers.create', {
        url: '/create',
        templateUrl: 'app/main/customers/createCustomerModal.html',
        controller: 'CustomersCtrl',
        controllerAs: 'vm'
      })
      .state('main.customers.orders', {
        url: '/orders',
        templateUrl: 'app/main/customers/viewCustomerOrders.html',
        controller: 'CustomersCtrl',
        controllerAs: 'vm'
      })
  });
