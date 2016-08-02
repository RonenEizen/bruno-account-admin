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
        onEnter: function (Modal) {
          Modal.createOrderModal()
        }
      })
      .state('main.customers.customer', {
        url: '/:id/:state',
        onEnter: function (Modal, CustomerService, $stateParams) {
          Modal.customerModal(_.find(CustomerService.customers, { '_id': $stateParams.id }), $stateParams.state)
        }
      })
    $urlRouterProvider
      .when('/customers/:id', '/customers/:id/view')
  });
