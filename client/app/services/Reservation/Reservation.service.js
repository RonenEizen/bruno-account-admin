'use strict'

angular.module('accountAdminApp')
  .service('ReservationService', function () {
    this.reservations = [
      {},
      {},
      {},
      {},
      {}
    ]

    this.get = (id) => _.find(this.reservations, { '_id': id }) || {}

    this.delete = (id) => {
      let i = _.findIndex(this.reservations, {'_id': id })
      this.reservations.splice(i, 1)
    }

    this.add = (newItem) => {
      let newProps = {
        _id: (Number(this.reservations[this.reservations.length - 1]._id) + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      angular.extend(newItem, newProps)
      this.reservations.push(newItem)
    }

    this.put = (updatedItem) => {
      let i = _.findIndex(this.reservations, {'_id': updatedItem._id })
      updatedItem.updatedAt = new Date()
      this.reservations[i] = updatedItem
    }
  })
