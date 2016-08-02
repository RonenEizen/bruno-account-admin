'use strict';

angular.module('accountAdminApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.food-menus', {
        url: '/food-menus',
        templateUrl: 'app/main/food-menus/food-menus.html',
        controller: 'FoodMenusCtrl'
      })


      // MENUS
      .state('main.food-menus.createMenu', {
        url: '/create-menu',
        onEnter: function (Modal) {
          Modal.createFoodMenuModal()
        }
      })
      .state('main.food-menus.menu', {
        url: '/:id/:state',
        onEnter: function (Modal, MenuService, $stateParams) {
          Modal.foodMenuModal(_.find(MenuService.menus, { '_id': $stateParams.id }), $stateParams.state)
        }
      })


      // CATEGORIES
      .state('main.food-menus.createCategory', {
        url: '/create-category',
        onEnter: function (Modal) {
          Modal.createMenuCategoryModal()
        }
      })
      .state('main.food-menus.category', {
        url: '/category/:id/:state',
        onEnter: function (Modal, MenuService, $stateParams) {
          Modal.menuCategoryModal(_.find(MenuService.categories, { '_id': $stateParams.id }), $stateParams.state)
        }
      })


      // FOOD ITEMS
      .state('main.food-menus.food', {
        url: '/food/:id/:state',
        onEnter: function (Modal, MenuService, $stateParams) {
          Modal.foodItemModal(_.find(MenuService.foodItems, { '_id': $stateParams.id }), $stateParams.state)
        }
      })
      .state('main.food-menus.addFood', {
        url: '/add-food',
        onEnter: function (Modal) {
          Modal.addFoodItemModal()
        }
      })
      .state('main.food-menus.createFood', {
        url: '/create-food',
        onEnter: function (Modal) {
          Modal.createFoodItemModal()
        }
      })


    $urlRouterProvider
      .when('/food-menus/menu/:id', '/food-menus/menu/:id/edit')
      .when('/food-menus/category/:id', '/food-menus/category/:id/edit')
      .when('/food-menus/food/:id', '/food-menus/food/:id/view');
  });
