'use strict'

angular.module('accountAdminApp')
  .service('FoodItemsService', function () {
    this.foodItems = [
      { _id: '1', name: 'Vietnamise Pad Thai', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iusto, error. Omnis hic atque, distinctio blanditiis magnam consequatur aspernatur tempora, dicta quia pariatur nam aliquid aliquam voluptates vero deleniti ad.', pictures: ['1234'], priceType: 'single', priceSingle: 10.9, foodCategories: '1', varieties: [{ _id: '1', name: 'Small Plate', price: 8.50 }, { _id: '2', name: 'Medium Plate', price: 9.50 }], options: [{ _id: '1', name: 'Extra Protein', price: 3.5 }, { _id: '2', name: 'Extra Sauce', price: 2.5 }], choices: [{ _id: '1', name: 'Protein', choices: ['Chicken', 'Shrimp', 'Tofu'] }, { _id: '2', name: 'Noodles', choices: ['Rice', 'Egg', 'Potato'] }] },
      { _id: '2', name: 'Duck Dumplings', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iusto, error. Omnis hic atque, distinctio blanditiis magnam consequatur aspernatur tempora, dicta quia pariatur nam aliquid aliquam voluptates vero deleniti ad.', pictures: ['1234'], priceType: 'single', priceSingle: 10.9, foodCategories: '1', varieties: [{ _id: '1', name: 'Small Plate', price: 8.50 }, { _id: '2', name: 'Medium Plate', price: 9.50 }], options: [{ _id: '1', name: 'Extra Protein', price: 3.5 }, { _id: '2', name: 'Extra Sauce', price: 2.5 }], choices: [{ _id: '1', name: 'Protein', choices: ['Chicken', 'Shrimp', 'Tofu'] }, { _id: '2', name: 'Noodles', choices: ['Rice', 'Egg', 'Potato'] }] },
      { _id: '3', name: 'Vegetable Spring Rolls', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iusto, error. Omnis hic atque, distinctio blanditiis magnam consequatur aspernatur tempora, dicta quia pariatur nam aliquid aliquam voluptates vero deleniti ad.', pictures: ['1234'], priceType: 'single', priceSingle: 10.9, foodCategories: '1', varieties: [{ _id: '1', name: 'Small Plate', price: 8.50 }, { _id: '2', name: 'Medium Plate', price: 9.50 }], options: [{ _id: '1', name: 'Extra Protein', price: 3.5 }, { _id: '2', name: 'Extra Sauce', price: 2.5 }], choices: [{ _id: '1', name: 'Protein', choices: ['Chicken', 'Shrimp', 'Tofu'] }, { _id: '2', name: 'Noodles', choices: ['Rice', 'Egg', 'Potato'] }] },
      { _id: '4', name: 'Marine Salted Noodles', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iusto, error. Omnis hic atque, distinctio blanditiis magnam consequatur aspernatur tempora, dicta quia pariatur nam aliquid aliquam voluptates vero deleniti ad.', pictures: ['1234'], priceType: 'single', priceSingle: 10.9, foodCategories: '1', varieties: [{ _id: '1', name: 'Small Plate', price: 8.50 }, { _id: '2', name: 'Medium Plate', price: 9.50 }], options: [{ _id: '1', name: 'Extra Protein', price: 3.5 }, { _id: '2', name: 'Extra Sauce', price: 2.5 }], choices: [{ _id: '1', name: 'Protein', choices: ['Chicken', 'Shrimp', 'Tofu'] }, { _id: '2', name: 'Noodles', choices: ['Rice', 'Egg', 'Potato'] }] },
      { _id: '5', name: 'Crispy Chicken', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iusto, error. Omnis hic atque, distinctio blanditiis magnam consequatur aspernatur tempora, dicta quia pariatur nam aliquid aliquam voluptates vero deleniti ad.', pictures: ['1234'], priceType: 'single', priceSingle: 10.9, foodCategories: '1', varieties: [{ _id: '1', name: 'Small Plate', price: 8.50 }, { _id: '2', name: 'Medium Plate', price: 9.50 }], options: [{ _id: '1', name: 'Extra Protein', price: 3.5 }, { _id: '2', name: 'Extra Sauce', price: 2.5 }], choices: [{ _id: '1', name: 'Protein', choices: ['Chicken', 'Shrimp', 'Tofu'] }, { _id: '2', name: 'Noodles', choices: ['Rice', 'Egg', 'Potato'] }] }
    ]

    this.get = (id) => _.find(this.foodItems, { '_id': id }) || null

    this.delete = (id) => {
      let i = _.findIndex(this.foodItems, {'_id': id })
      this.foodItems.splice(i, 1)
    }

    this.add = (newItem) => {
      let newProps = {
        _id: (Number(this.foodItems[this.foodItems.length - 1]._id) + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      angular.extend(newItem, newProps)
      this.foodItems.push(newItem)
    }

    this.put = (updatedItem) => {
      let i = _.findIndex(this.foodItems, {'_id': updatedItem._id })
      updatedItem.updatedAt = new Date()
      this.foodItems[i] = updatedItem
    }
  })
