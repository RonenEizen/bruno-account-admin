'use strict';

angular.module('accountAdminApp')
  .controller('FoodMenusCtrl', function($scope, MenuService) {
    $scope.pageTitle = 'Food Menus';
    $scope.menus = MenuService.menus;
    $scope.categories = MenuService.categories;
    $scope.foodItems = MenuService.foodItems;

    $scope.object = {
      _id: '1',
      name: 'Pad Thai',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iusto, error. Omnis hic atque, distinctio blanditiis magnam consequatur aspernatur tempora, dicta quia pariatur nam aliquid aliquam voluptates vero deleniti ad.',
      pictures: ['1234'],
      priceType: 'single',
      priceSingle: 10.9,
      foodCategories: '1', // should it be an Array? ['1', '2', '3'],
      varieties: [{
        _id: '1',
        name: 'Small Plate',
        price: 8.50
      }, {
        _id: '2',
        name: 'Medium Plate',
        price: 9.50
      }],

      options: [{
        _id: '1',
        name: 'Extra Protein',
        price: 3.5
      }, {
        _id: '2',
        name: 'Extra Sauce',
        price: 2.5
      }],

      choices: [{
        _id: '1',
        name: 'Protein',
        choices: ['Chicken', 'Shrimp', 'Tofu']
      }, {
        _id: '2',
        name: 'Noodles',
        choices: ['Rice', 'Egg', 'Potato']
      }]
    };

    $scope.addVar = () => { $scope.object.varieties.push({}) }
    $scope.addOption = () => { $scope.object.options.push({}) }
    $scope.addChoice = () => { $scope.object.choices.push({}) }

    $scope.removeVar = (i) => { $scope.object.varieties.splice(i,1) };
    $scope.removeOption = (i) => { $scope.object.options.splice(i,1) };
    $scope.removeChoice = (i) => { $scope.object.choices.splice(i,1) };

  });
