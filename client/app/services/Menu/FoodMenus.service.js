'use strict'

angular.module('accountAdminApp')
  .service('FoodMenusService', function () {
    this.menus = [
      { _id: '1', active: true, name: 'Lunch Menu', foodCategories: ['1', '2', '4'] },
      { _id: '2', active: false, name: 'Dinner Menu', foodCategories: ['1', '2', '4'] },
      { _id: '3', active: false, name: 'Weekends Menu', foodCategories: ['1', '2', '4'] }
    ]

    this.get = (id) => _.find(this.menus, { '_id': id }) || {}

    this.delete = (id) => {
      let i = _.findIndex(this.menus, {'_id': id })
      this.menus.splice(i, 1)
    }

    this.add = (newItem) => {
      let newProps = {
        _id: (Number(this.menus[this.menus.length - 1]._id) + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      angular.extend(newItem, newProps)
      this.menus.push(newItem)
    }

    this.put = (updatedItem) => {
      let i = _.findIndex(this.menus, {'_id': updatedItem._id })
      updatedItem.updatedAt = new Date()
      this.menus[i] = updatedItem
    }
  })
