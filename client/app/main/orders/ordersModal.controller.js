'use strict';

angular.module('accountAdminApp')
  .controller('OrdersModalCtrl', function($scope, CustomerService, DefaultsService, MenuService, OrderService, modalObject, modalState, $filter) {
    $scope.customers = CustomerService.customers;
    $scope.foodItems = MenuService.foodItems;
    $scope.orders = OrderService.orders;
    $scope.states = DefaultsService.states;
    $scope.object = modalObject;
    $scope.action = modalState;
    $scope.isOrderEmpty = () => _.size($scope.object.items) < 1;

    // ORDERS: Sets class to rows based on order status
    $scope.setStatus = () => status.toLowerCase().replace(/\s+/g, '')

    // this function gets data from a customer ID
    $scope.customerData = (ownerID, query) => {
      let q = query;
      let a;

      $scope.customers.forEach((cust) => {
        if (ownerID === cust._id) {
          if (q === 'name') { a = cust.fname + ' ' + cust.lname; }
          else if (q === 'homePhone' || query === 'mobilePhone') { a = $filter('phone')(cust[q])}
          else if (q === 'addr') { a = cust['addr'] + ', ' + cust['state'] + ' ' + cust['zip'] }
          else { a = cust[q]; }
        }
      });
      return a;
    };
  });
