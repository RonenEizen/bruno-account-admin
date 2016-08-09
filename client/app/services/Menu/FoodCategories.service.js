'use strict'

angular.module('accountAdminApp')
  .service('FoodCategoriesService', function () {
    this.categories = [
      { _id: '1', name: 'Beverages', foodItems: ['123', '124', '234'], foodMenus: ['1'] },
      { _id: '2', name: 'Appetizers', foodItems: ['123', '124', '234'], foodMenus: ['1'] },
      { _id: '3', name: 'Main', foodItems: ['123', '124', '234'], foodMenus: ['1'] },
      { _id: '4', name: 'Salads', foodItems: ['123', '124', '234'], foodMenus: ['1'] }
    ]

    this.get = (id) => _.find(this.categories, { '_id': id }) || {}

    this.delete = (id) => {
      let i = _.findIndex(this.categories, {'_id': id })
      this.categories.splice(i, 1)
    }

    this.add = (newItem) => {
      let newProps = {
        _id: (Number(this.categories[this.categories.length - 1]._id) + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      angular.extend(newItem, newProps)
      this.categories.push(newItem)
    }

    this.put = (updatedItem) => {
      let i = _.findIndex(this.categories, {'_id': updatedItem._id })
      updatedItem.updatedAt = new Date()
      this.categories[i] = updatedItem
    }
  })
