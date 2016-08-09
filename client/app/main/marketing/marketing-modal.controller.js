'use strict'

angular.module('accountAdminApp')
  .controller('MarketingModalCtrl', function ($scope, $uibModalInstance, MarketingService, modalObject, modalState) {
    const SERVICE = MarketingService

    $scope.campaignsStatus = ['Cancelled', 'Current', 'Expiring', 'Expired']
    $scope.campaigns = SERVICE.campaigns

    $scope.object = angular.copy(SERVICE.get(modalObject)) || {}
    $scope.action = modalState || 'view'

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
    }
    $scope.next = (action) => {
      SERVICE.put($scope.object)
      $scope.action = action
    }
    $scope.skip = (action) => {
      $scope.object = angular.copy(SERVICE.get(modalObject))
      $scope.action = action
    }
    $scope.delete = () => {
      SERVICE.delete(modalObject)
      dismiss()
    }

  })
