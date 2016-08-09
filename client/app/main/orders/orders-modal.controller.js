'use strict'

angular.module('accountAdminApp')
  .controller('OrdersModalCtrl', function($scope, $uibModalInstance, CustomerService, DefaultsService, FoodItemsService, OrderService, modalObject, modalState, $filter) {
    const SERVICE = OrderService

    $scope.states = DefaultsService.states
    $scope.customers = CustomerService.customers
    $scope.foodItems = FoodItemsService.foodItems
    $scope.orders = SERVICE.orders
    $scope.object = angular.copy(SERVICE.get(modalObject))
    $scope.action = modalState || 'view'

    // sets class to order
    $scope.setStatus = () => status.toLowerCase().replace(/\s+/g, '')

    // checks if order has items
    $scope.isOrderEmpty = () => _.size($scope.object.items) < 1

    // gets data from a customer ID
    $scope.customerData = (ownerID, query) => {
      let q = query
      let a

      $scope.customers.forEach((cust) => {
        if (ownerID === cust._id) {
          if (q === 'name') { a = cust.fname + ' ' + cust.lname }
          else if (q === 'homePhone' || query === 'mobilePhone') { a = $filter('phone')(cust[q])}
          else if (q === 'addr') { a = cust['addr'] + ', ' + cust['state'] + ' ' + cust['zip'] }
          else { a = cust[q] }
        }
      })
      return a
    }

    let dismiss = $uibModalInstance.dismiss

    $scope.add = () => {
      SERVICE.add($scope.object)
      dismiss()
    }
    $scope.cancel = () => {
      $scope.object = angular.copy(SERVICE.get(modalObject))
      $scope.action = 'view'
    }
    $scope.save = () => {
      SERVICE.put($scope.object)
      dismiss()
    }
    $scope.delete = () => {
      SERVICE.delete(modalObject)
      dismiss()
    }
    $scope.changeStatus = (status) => {
      let newStatus = { status: status }
      angular.extend($scope.object, newStatus)
      $scope.save()
    }
  })
