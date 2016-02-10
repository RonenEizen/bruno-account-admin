'use strict';

angular.module('accountAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.customers', {
        url: '/customers',
        templateUrl: 'app/main/customers/customers.html',
        controller: 'CustomersCtrl'
      });
  });