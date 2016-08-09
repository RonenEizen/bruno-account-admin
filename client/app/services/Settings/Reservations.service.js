'use strict'

angular.module('accountAdminApp')
  .service('ReservationsSettingsService', function () {
    this.reservations = {
      tables: [
        { _id: '1', name: 'Booth', capacity: 6, quantity: 5, mergeable: 0 },
        { _id: '2', name: 'Window', capacity: 2, quantity: 2, mergeable: 1 }
      ],
      seating: 52
    }

    this.getTable = (id) => this.reservations.tables.find((item) => item._id === id) || undefined

    this.deleteTable = (id) => {
      let i = _.findIndex(this.reservations.tables, {'_id': id })
      this.reservations.tables.splice(i, 1)
    }

    this.addTable = (newItem) => {
      let newProps = {
        _id: (Number(this.reservations.tables[this.reservations.tables.length - 1]._id) + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      angular.extend(newItem, newProps)
      this.reservations.tables.push(newItem)
    }

    this.putTable = (updatedItem) => {
      let i = _.findIndex(this.reservations.tables, {'_id': updatedItem._id })
      updatedItem.updatedAt = new Date()
      this.reservations.tables[i] = updatedItem
    }

    this.getSeats = () => this.reservations.seating || undefined

    this.putSeats = (updatedItem) => {
      this.reservations.seating = updatedItem
    }
  })
