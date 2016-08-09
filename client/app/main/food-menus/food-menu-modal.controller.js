'use strict'

angular.module('accountAdminApp')
  .controller('FoodMenuModalCtrl', function($scope, $uibModalInstance, FoodMenusService, FoodCategoriesService, modalObject, modalState) {
    const SERVICE = FoodMenusService

    $scope.menus = SERVICE.menus
    $scope.categories = FoodCategoriesService.categories

    $scope.object = angular.copy(SERVICE.get(modalObject))
    $scope.action = modalState || 'edit'

    const dismiss = $uibModalInstance.dismiss

    $scope.add = () => {
      SERVICE.add($scope.object)
      dismiss()
    }
    $scope.cancel = () => {
      $scope.object = angular.copy(SERVICE.get(modalObject))
      dismiss()
    }
    $scope.save = () => {
      SERVICE.put($scope.object)
      dismiss()
    }
    $scope.delete = () => {
      SERVICE.delete(modalObject)
      dismiss()
    }
  })
