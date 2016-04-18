'use strict';

angular.module('accountAdminApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.food-menus', {
        url: '/food-menus',
        templateUrl: 'app/main/food-menus/food-menus.html',
        controller: 'FoodMenusCtrl'
      })
      .state('main.food-menus.createMenu', {
        url: '/menu/create',
        templateUrl: 'app/main/food-menus/createFoodMenuModal.html'
      })
      .state('main.food-menus.menu', {
        abstract: true,
        url: '/menu/:_id',
        templateUrl: 'app/main/food-menus/foodMenuModal.html'
      })
      .state('main.food-menus.menu.edit', {
        url: '/edit',
        templateUrl: 'app/main/food-menus/editFoodMenuModal.html'
      })
      .state('main.food-menus.menu.remove', {
        url: '/remove',
        templateUrl: 'app/main/food-menus/removeFoodMenuModal.html'
      })
      .state('main.food-menus.menu.addFood', {
        url: '/addFood',
        templateUrl: 'app/main/food-menus/addExistingFoodModal.html'
      })

      .state('main.food-menus.createCategory', {
        url: '/category/create',
        templateUrl: 'app/main/food-menus/createMenuCategoryModal.html'
      })
      .state('main.food-menus.category', {
        abstract: true,
        url: '/category/:_id',
        templateUrl: 'app/main/food-menus/menuCategoryModal.html'
      })
      .state('main.food-menus.category.edit', {
        url: '/edit',
        templateUrl: 'app/main/food-menus/editMenuCategoryModal.html'
      })
      .state('main.food-menus.category.remove', {
        url: '/remove',
        templateUrl: 'app/main/food-menus/removeMenuCategoryModal.html'
      })
      .state('main.food-menus.createFood', {
        url: '/food/create',
        templateUrl: 'app/main/food-menus/createFoodItemModal.html'
      })
      .state('main.food-menus.food', {
        abstract: true,
        url: '/food/:_id',
        templateUrl: 'app/main/food-menus/foodItemModal.html'
      })
      .state('main.food-menus.food.view', {
        url: '/view',
        templateUrl: 'app/main/food-menus/viewFoodItemModal.html'
      })
      .state('main.food-menus.food.edit', {
        url: '/edit',
        templateUrl: 'app/main/food-menus/editFoodItemModal.html'
      })
      .state('main.food-menus.food.remove', {
        url: '/remove',
        templateUrl: 'app/main/food-menus/removeFoodItemModal.html'
      });
    $urlRouterProvider
      .when('/food-menus/menu/:_id', '/food-menus/menu/:_id/edit')
      .when('/food-menus/category/:_id', '/food-menus/category/:_id/edit')
      .when('/food-menus/food/:_id', '/food-menus/food/:_id/view');
  });
