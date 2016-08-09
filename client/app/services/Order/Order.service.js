'use strict'

angular.module('accountAdminApp')
  .service('OrderService', function () {
    this.orders = [
      { _id: '123456', owner: '1', createdAt: new Date('2016-05-01T10:41:00Z'), updatedAt: new Date('2016-05-01T10:41:00Z'), type: 'pickup', status: 'new', items: [{ _id: '1', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, },{ _id: '2', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 3, price: 1.10, },{ _id: '3', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 5, price: 1.10, }], total: 2.20 },
      { _id: '654321', owner: '2', createdAt: new Date('2016-05-01T10:41:00Z'), updatedAt: new Date('2016-05-01T10:41:00Z'), type: 'delivery', status: 'new', items: [{ _id: '1', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, },{ _id: '2', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 3, price: 1.10, },{ _id: '3', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 5, price: 1.10, }], total: 2.20 },
      { _id: '456789', owner: '2', createdAt: new Date('2016-05-01T10:41:00Z'), updatedAt: new Date('2016-05-01T10:41:00Z'), type: 'pickup', status: 'fulfilled', items: [{ _id: '1', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, },{ _id: '2', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 3, price: 1.10, },{ _id: '3', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 5, price: 1.10, }], total: 2.20 },
      { _id: '987654', owner: '3', createdAt: new Date('2016-05-01T10:41:00Z'), updatedAt: new Date('2016-05-01T10:41:00Z'), type: 'delivery', status: 'inprogress', items: [{ _id: '1', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, },{ _id: '2', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 3, price: 1.10, },{ _id: '3', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 5, price: 1.10, }], total: 2.20 },
      { _id: '876543', owner: '1', createdAt: new Date('2016-05-01T10:41:00Z'), updatedAt: new Date('2016-05-01T10:41:00Z'), type: 'pickup', status: 'cancelled', items: [{ _id: '1', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, },{ _id: '2', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 3, price: 1.10, },{ _id: '3', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 5, price: 1.10, }], total: 2.20 }
    ]

    this.get = (id) => _.find(this.orders, { '_id': id }) || {items:[]}

    this.delete = (id) => {
      let i = _.findIndex(this.orders, {'_id': id })
      this.orders.splice(i, 1)
    }

    this.add = (newItem) => {
      let newProps = {
        _id: (Number(this.orders[this.orders.length - 1]._id) + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'new'
      }
      angular.extend(newItem, newProps)
      this.orders.push(newItem)
    }

    this.put = (updatedItem) => {
      let i = _.findIndex(this.orders, {'_id': updatedItem._id })
      updatedItem.updatedAt = new Date()
      this.orders[i] = updatedItem
    }
  })
