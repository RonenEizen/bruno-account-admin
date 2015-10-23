'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.customers', {
        url: '/customers',
        templateUrl: 'app/main/customers/customers.html',
        controller: 'CustomersCtrl'
      });
  });