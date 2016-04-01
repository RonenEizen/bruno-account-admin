'use strict';

angular.module('accountAdminApp')
  .service('MenuService', function () {
    this.menus = [
      { _id: 1, name: "My Menu", foodCategories: [1, 2, 4] },
      { _id: 2, name: "My Menu", foodCategories: [1, 2, 4] }
    ]
    this.categories = [
      { _id: 1, name: "Beverages", foodItems: [123, 124, 234], foodMenus: 1 },
      { _id: 2, name: "Beverages", foodItems: [123, 124, 234], foodMenus: 1 },
      { _id: 3, name: "Beverages", foodItems: [123, 124, 234], foodMenus: 1 }
    ]
    this.foodItems = [
      { _id: 456, name: "Pad Thai", description: "food description", pictures: [1234], foodCategories: [1, 2, 3], varieties: [{ _id: 1, name: "Small", price: 8.50 }], choices: [{ _id: 1, name: "Protein", options: [{ _id: 1, name: "chicken" }] }], options: [{ _id: 1, name: "Extra Protein", price: 3.5 }] },
      { _id: 457, name: "Tom Yum", description: "food description", pictures: [1234], foodCategories: [1, 2, 3], varieties: [{ _id: 1, name: "Small", price: 8.50 }], choices: [{ _id: 1, name: "Protein", options: [{ _id: 1, name: "chicken" }] }], options: [{ _id: 1, name: "Extra Protein", price: 3.5 }] },
      { _id: 458, name: "Kua Bai", description: "food description", pictures: [1234], foodCategories: [1, 2, 3], varieties: [{ _id: 1, name: "Small", price: 8.50 }], choices: [{ _id: 1, name: "Protein", options: [{ _id: 1, name: "chicken" }] }], options: [{ _id: 1, name: "Extra Protein", price: 3.5 }] }
    ]
  });
