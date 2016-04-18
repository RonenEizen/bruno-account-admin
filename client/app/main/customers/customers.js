'use strict';

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
        templateUrl: 'app/main/customers/createCustomerModal.html'
      })
      .state('main.customers.cust', {
        abstract: true,
        url: '/:_id',
        templateUrl: 'app/main/customers/CustomerModal.html'
      })
      .state('main.customers.cust.view', {
        url: '/view',
        templateUrl: 'app/main/customers/viewCustomerModal.html'
      })
      .state('main.customers.cust.edit', {
        url: '/edit',
        templateUrl: 'app/main/customers/editCustomerModal.html'
      })
      .state('main.customers.cust.remove', {
        url: '/remove',
        templateUrl: 'app/main/customers/removeCustomerModal.html'
      })
      .state('main.customers.cust.orders', {
        url: '/orders',
        templateUrl: 'app/main/customers/viewCustomerOrdersModal.html'
      });
    $urlRouterProvider
      .when('/customers/:_id', '/customers/:_id/view');
  });
