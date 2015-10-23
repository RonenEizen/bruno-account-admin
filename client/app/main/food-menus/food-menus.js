'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.food-menus', {
        url: '/food-menus',
        templateUrl: 'app/main/food-menus/food-menus.html',
        controller: 'FoodMenusCtrl'
      });
  });