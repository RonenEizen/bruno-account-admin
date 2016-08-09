'use strict'

angular.module('accountAdminApp')
  .controller('FoodItemModalCtrl', function($scope, $uibModalInstance, FoodCategoriesService, FoodItemsService, modalObject, modalState) {
    const SERVICE = FoodItemsService

    $scope.categories = FoodCategoriesService.categories
    $scope.foodItems = SERVICE.foodItems

    $scope.object = angular.copy(SERVICE.get(modalObject)) || {varieties: [],options:[], choices:[]}
    console.log($scope.object)
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
      dismiss()
    }
    $scope.delete = () => {
      SERVICE.delete(modalObject)
      dismiss()
    }

    $scope.addVar = () => { $scope.object.varieties.push({}) }
    $scope.addOption = () => { $scope.object.options.push({}) }
    $scope.addChoice = () => { $scope.object.choices.push({}) }

    $scope.removeVar = (i) => { $scope.object.varieties.splice(i,1) }
    $scope.removeOption = (i) => { $scope.object.options.splice(i,1) }
    $scope.removeChoice = (i) => { $scope.object.choices.splice(i,1) }
  })
