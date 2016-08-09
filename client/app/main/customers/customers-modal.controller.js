'use strict';

angular.module('accountAdminApp')
  .controller('CustomersModalCtrl', function ($scope, $uibModalInstance, CustomerService, modalObject, modalState) {
    const SERVICE = CustomerService

    $scope.customers = SERVICE.customers
    $scope.object = angular.copy(SERVICE.get(modalObject))
    $scope.action = modalState

    const dismiss = $uibModalInstance.dismiss

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
  });
