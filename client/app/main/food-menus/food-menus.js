'use strict'

angular.module('accountAdminApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.food-menus', {
        url: '/food-menus',
        templateUrl: 'app/main/food-menus/food-menus.html',
        controller: 'FoodMenusCtrl'
      })

      // MENUS
      .state('main.food-menus.create-menu', {
        url: '/create-menu',
        onEnter: Modal => Modal.openModal('app/main/food-menus/create-food-menu-modal.html', 'FoodMenuModalCtrl')
      })
      .state('main.food-menus.menu', {
        url: '/menu/:id?state',
        onEnter: (Modal, $stateParams) => Modal.openModal('app/main/food-menus/food-menu-modal.html', 'FoodMenuModalCtrl', $stateParams.id, $stateParams.state || 'edit')
      })

      // CATEGORIES
      .state('main.food-menus.create-category', {
        url: '/create-category',
        onEnter: Modal => Modal.openModal('app/main/food-menus/create-menu-category-modal.html', 'FoodCategoryModalCtrl')
      })
      .state('main.food-menus.category', {
        url: '/category/:id?state',
        onEnter: (Modal, $stateParams) => Modal.openModal('app/main/food-menus/menu-category-modal.html', 'FoodCategoryModalCtrl', $stateParams.id, $stateParams.state || 'edit')
      })

      // FOOD ITEMS
      .state('main.food-menus.food', {
        url: '/food/:id?state',
        onEnter: (Modal, $stateParams) => Modal.openModal('app/main/food-menus/food-item-modal.html', 'FoodItemModalCtrl', $stateParams.id, $stateParams.state)
      })
      .state('main.food-menus.add-food', {
        url: '/add-food',
        onEnter: Modal => Modal.openModal('app/main/food-menus/add-food-item-modal.html', 'FoodItemModalCtrl')
      })
      .state('main.food-menus.create-food', {
        url: '/create-food',
        onEnter: Modal => Modal.openModal('app/main/food-menus/create-food-item-modal.html', 'FoodItemModalCtrl')
      })
  })
