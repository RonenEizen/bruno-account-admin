'use strict'

angular.module('accountAdminApp')
  .controller('FoodMenusCtrl', function($scope, FoodMenusService, FoodCategoriesService, FoodItemsService) {
    $scope.pageTitle = 'Food Menus'
    $scope.menus = FoodMenusService.menus
    $scope.categories = FoodCategoriesService.categories
    $scope.foodItems = FoodItemsService.foodItems
  })
