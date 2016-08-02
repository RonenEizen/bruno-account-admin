'use strict';

angular.module('accountAdminApp')
  .controller('FoodMenusModalCtrl', function($scope, MenuService, modalObject, modalState) {
    $scope.pageTitle = 'Food Menus';
    $scope.menus = MenuService.menus;
    $scope.categories = MenuService.categories;
    $scope.foodItems = MenuService.foodItems;

    $scope.object = modalObject || {varieties: [],options:[], choices:[]};
    $scope.action = modalState;

    $scope.addVar = () => { $scope.object.varieties.push({}) };
    $scope.addOption = () => { $scope.object.options.push({}) };
    $scope.addChoice = () => { $scope.object.choices.push({}) };

    $scope.removeVar = (i) => { $scope.object.varieties.splice(i,1) };
    $scope.removeOption = (i) => { $scope.object.options.splice(i,1) };
    $scope.removeChoice = (i) => { $scope.object.choices.splice(i,1) };
  });
