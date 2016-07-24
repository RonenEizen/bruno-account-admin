'use strict';

angular.module('accountAdminApp')
  .controller('CustomersModalCtrl', function ($scope, CustomerService, modalObject, modalState) {

    $scope.customers = CustomerService.customers;
    // $scope.object = modalObject;
    $scope.action = modalState;

    $scope.object = {
      _id: '1',
      createdAt: new Date('2016-05-01T10:41:00Z'),
      updatedAt: new Date('2016-05-01T10:41:00Z'),
      fname: 'Alpha',
      mname: 'I',
      lname: 'Bravo',
      homePhone: '9999999991',
      mobilePhone: '9999999991',
      email: 'alpha@domain.com',
      workEmail: 'alpha@company.com',
      addr: '91th Dundas St',
      city: 'New York City',
      state: 'NY',
      zip: 99991,
      orders: [
        '12345',
        '12346',
        '12347'
      ]
    }
  });
