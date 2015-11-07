'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.food-menus', {
        url: '/food-menus',
        templateUrl: 'app/main/food-menus/food-menus.html',
        controller: 'FoodMenusCtrl'
      })
      .state('main.food-menus.preview', {
        url: '/food-menus/preview',
        templateUrl: 'app/main/food-menus/food-menus.preview.html',
        controller: 'FoodMenusCtrl'
      })
      .state('main.food-menus.new', {
        url: '/food-menus/new',
        templateUrl: 'app/main/food-menus/food-menus.new.html',
        controller: 'FoodMenusCtrl'
      })
      .state('main.food-menus.modal', {
        url: '/food-menus/new',
        templateUrl: 'app/main/food-menus/food-menus.modal.html',
        controller: 'FoodMenusCtrl'
      });
  });
