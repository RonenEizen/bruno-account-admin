'use strict';

angular.module('accountAdminApp')
  .service('MenuService', function () {
    this.menus = [
      { _id: '1', name: 'My Menu', foodCategories: ['1', '2', '4'] },
      { _id: '2', name: 'Old Menu', foodCategories: ['1', '2', '4'] }
    ];
    this.categories = [
      { _id: '1', name: 'Beverages', foodItems: ['123', '124', '234'], foodMenus: ['1'] },
      { _id: '2', name: 'Appetizers', foodItems: ['123', '124', '234'], foodMenus: ['1'] },
      { _id: '3', name: 'Main', foodItems: ['123', '124', '234'], foodMenus: ['1'] },
      { _id: '4', name: 'Salads', foodItems: ['123', '124', '234'], foodMenus: ['1'] }
    ];
    this.foodItems = [
      { _id: '1', name: 'Pad Thai', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iusto, error. Omnis hic atque, distinctio blanditiis magnam consequatur aspernatur tempora, dicta quia pariatur nam aliquid aliquam voluptates vero deleniti ad.', pictures: ['1234'], priceType: 'single', priceSingle: 10.9, foodCategories: '1', varieties: [{ _id: '1', name: 'Small Plate', price: 8.50 }, { _id: '2', name: 'Medium Plate', price: 9.50 }], options: [{ _id: '1', name: 'Extra Protein', price: 3.5 }, { _id: '2', name: 'Extra Sauce', price: 2.5 }], choices: [{ _id: '1', name: 'Protein', choices: ['Chicken', 'Shrimp', 'Tofu'] }, { _id: '2', name: 'Noodles', choices: ['Rice', 'Egg', 'Potato'] }] },
      { _id: '2', name: 'Pad Thai', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iusto, error. Omnis hic atque, distinctio blanditiis magnam consequatur aspernatur tempora, dicta quia pariatur nam aliquid aliquam voluptates vero deleniti ad.', pictures: ['1234'], priceType: 'single', priceSingle: 10.9, foodCategories: '1', varieties: [{ _id: '1', name: 'Small Plate', price: 8.50 }, { _id: '2', name: 'Medium Plate', price: 9.50 }], options: [{ _id: '1', name: 'Extra Protein', price: 3.5 }, { _id: '2', name: 'Extra Sauce', price: 2.5 }], choices: [{ _id: '1', name: 'Protein', choices: ['Chicken', 'Shrimp', 'Tofu'] }, { _id: '2', name: 'Noodles', choices: ['Rice', 'Egg', 'Potato'] }] },
      { _id: '3', name: 'Pad Thai', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iusto, error. Omnis hic atque, distinctio blanditiis magnam consequatur aspernatur tempora, dicta quia pariatur nam aliquid aliquam voluptates vero deleniti ad.', pictures: ['1234'], priceType: 'single', priceSingle: 10.9, foodCategories: '1', varieties: [{ _id: '1', name: 'Small Plate', price: 8.50 }, { _id: '2', name: 'Medium Plate', price: 9.50 }], options: [{ _id: '1', name: 'Extra Protein', price: 3.5 }, { _id: '2', name: 'Extra Sauce', price: 2.5 }], choices: [{ _id: '1', name: 'Protein', choices: ['Chicken', 'Shrimp', 'Tofu'] }, { _id: '2', name: 'Noodles', choices: ['Rice', 'Egg', 'Potato'] }] },
      { _id: '4', name: 'Pad Thai', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iusto, error. Omnis hic atque, distinctio blanditiis magnam consequatur aspernatur tempora, dicta quia pariatur nam aliquid aliquam voluptates vero deleniti ad.', pictures: ['1234'], priceType: 'single', priceSingle: 10.9, foodCategories: '1', varieties: [{ _id: '1', name: 'Small Plate', price: 8.50 }, { _id: '2', name: 'Medium Plate', price: 9.50 }], options: [{ _id: '1', name: 'Extra Protein', price: 3.5 }, { _id: '2', name: 'Extra Sauce', price: 2.5 }], choices: [{ _id: '1', name: 'Protein', choices: ['Chicken', 'Shrimp', 'Tofu'] }, { _id: '2', name: 'Noodles', choices: ['Rice', 'Egg', 'Potato'] }] },
      { _id: '5', name: 'Pad Thai', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iusto, error. Omnis hic atque, distinctio blanditiis magnam consequatur aspernatur tempora, dicta quia pariatur nam aliquid aliquam voluptates vero deleniti ad.', pictures: ['1234'], priceType: 'single', priceSingle: 10.9, foodCategories: '1', varieties: [{ _id: '1', name: 'Small Plate', price: 8.50 }, { _id: '2', name: 'Medium Plate', price: 9.50 }], options: [{ _id: '1', name: 'Extra Protein', price: 3.5 }, { _id: '2', name: 'Extra Sauce', price: 2.5 }], choices: [{ _id: '1', name: 'Protein', choices: ['Chicken', 'Shrimp', 'Tofu'] }, { _id: '2', name: 'Noodles', choices: ['Rice', 'Egg', 'Potato'] }] }
    ];
  });

