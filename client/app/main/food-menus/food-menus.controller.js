'use strict';

angular.module('accountAdminApp')
  .controller('FoodMenusCtrl', function($scope, MenuService) {
    $scope.pageTitle = 'Food Menus';
    $scope.menus = MenuService.menus;
    $scope.categories = MenuService.categories;
    $scope.foodItems = MenuService.foodItems;
  });
