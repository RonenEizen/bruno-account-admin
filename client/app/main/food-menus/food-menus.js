'use strict';

angular.module('accountAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.food-menus', {
        url: '/food-menus',
        templateUrl: 'app/main/food-menus/food-menus.html',
        controller: 'FoodMenusCtrl'
      })
      .state('main.food-menus.viewMenu', {
        url: '/menu',
        templateUrl: 'app/main/food-menus/viewFoodMenuModal.html',
        controller: 'FoodMenusCtrl',
        controllerAs: 'vm'
      })
      .state('main.food-menus.createMenu', {
        url: '/createMenu',
        templateUrl: 'app/main/food-menus/createFoodMenuModal.html',
        controller: 'FoodMenusCtrl',
        controllerAs: 'vm'
      })
      .state('main.food-menus.viewCategory', {
        url: '/viewCategory',
        templateUrl: 'app/main/food-menus/viewMenuCategoryModal.html',
        controller: 'FoodMenusCtrl',
        controllerAs: 'vm'
      })
      .state('main.food-menus.createCategory', {
        url: '/createCategory',
        templateUrl: 'app/main/food-menus/createMenuCategoryModal.html',
        controller: 'FoodMenusCtrl',
        controllerAs: 'vm'
      })
      .state('main.food-menus.viewFood', {
        url: '/viewFood',
        templateUrl: 'app/main/food-menus/viewFoodItemModal.html',
        controller: 'FoodMenusCtrl',
        controllerAs: 'vm'
      })
      .state('main.food-menus.createFood', {
        url: '/createFood',
        templateUrl: 'app/main/food-menus/createFoodItemModal.html',
        controller: 'FoodMenusCtrl',
        controllerAs: 'vm'
      })
      .state('main.food-menus.existingFood', {
        url: '/existingFood',
        templateUrl: 'app/main/food-menus/createExistingFoodModal.html',
        controller: 'FoodMenusCtrl',
        controllerAs: 'vm'
      })
  });
