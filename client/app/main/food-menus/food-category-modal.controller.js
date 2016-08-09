'use strict'

angular.module('accountAdminApp')
  .controller('FoodCategoryModalCtrl', function($scope, $uibModalInstance, FoodCategoriesService, FoodItemsService, modalObject, modalState) {
    const SERVICE = FoodCategoriesService

    $scope.categories = SERVICE.categories
    $scope.foodItems = FoodItemsService.foodItems

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
