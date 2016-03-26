'use strict';

angular.module('accountAdminApp')
  .service('OrderService', function () {
    this.orders = [
      { _id: '654321', owner: '1', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), type: 'pickup', status: 'new', items: [{ _id: '1', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, },{ _id: '2', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 3, price: 1.10, },{ _id: '3', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 5, price: 1.10, }], total: 2.20 },
      { _id: '456123', owner: '2', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), type: 'delivery', status: 'new', items: [{ _id: '1', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, },{ _id: '2', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 3, price: 1.10, },{ _id: '3', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 5, price: 1.10, }], total: 2.20 },
      { _id: '123456', owner: '2', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), type: 'pickup', status: 'fulfilled', items: [{ _id: '1', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, },{ _id: '2', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 3, price: 1.10, },{ _id: '3', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 5, price: 1.10, }], total: 2.20 },
      { _id: '321654', owner: '3', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), type: 'delivery', status: 'inprogress', items: [{ _id: '1', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, },{ _id: '2', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 3, price: 1.10, },{ _id: '3', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 5, price: 1.10, }], total: 2.20 },
      { _id: '321456', owner: '1', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), type: 'pickup', status: 'cancelled', items: [{ _id: '1', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, },{ _id: '2', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 3, price: 1.10, },{ _id: '3', variety: '1', choices: [{ 1: 1 }], options: [1], qty: 5, price: 1.10, }], total: 2.20 }
    ];
    this.add = (newOrder) => {
      let newProps = {
        _id: (Number(this.orders[this.orders.length - 1]._id) + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'new'
        // TODO: save current prices
        // TODO: set total
      }

      angular.extend(newOrder, newProps)

      this.orders.push(newOrder)
    }
    this.update = (updatedOrder) => {
      // find index by _id
      // change updatedAt to now
      // splice add using index
    }
  });
