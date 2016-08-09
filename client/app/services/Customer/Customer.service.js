'use strict'

angular.module('accountAdminApp')
  .service('CustomerService', function () {
    this.customers = [
      { _id: '1', createdAt: Date('2016-03-01T12:00:00'), updatedAt: Date('2016-03-01T12:00:00'), fname: 'Alpha', mname: 'I', lname: 'Bravo', homePhone: '9999999991', mobilePhone: '9999999991', email: 'alpha@domain.com', workEmail: 'alpha@company.com', addr: '91th Dundas St', city: 'New York City', state: 'NY', zip: 99991, orders: ['12345', '12346', '12347'] },
      { _id: '2', createdAt: Date('2016-03-01T12:00:00'), updatedAt: Date('2016-03-01T12:00:00'), fname: 'Bravo', mname: 'I', lname: 'Charlie', homePhone: '9999999992', mobilePhone: '9999999992', email: 'bravo@domain.com', workEmail: 'bravo@company.com', addr: '92th Dundas St', city: 'New York City', state: 'FL', zip: 99992, orders: ['12345', '12346', '12347'] },
      { _id: '3', createdAt: Date('2016-03-01T12:00:00'), updatedAt: Date('2016-03-01T12:00:00'), fname: 'Charlie', mname: 'I', lname: 'Delta', homePhone: '9999999993', mobilePhone: '9999999993', email: 'charlie@domain.com', workEmail: 'charlie@company.com', addr: '93th Dundas St', city: 'New York City', state: 'CA', zip: 99993, orders: ['12345', '12346', '12347'] },
      { _id: '4', createdAt: Date('2016-03-01T12:00:00'), updatedAt: Date('2016-03-01T12:00:00'), fname: 'Delta', mname: 'I', lname: 'Eco', homePhone: '9999999994', mobilePhone: '9999999994', email: 'delta@domain.com', workEmail: 'delta@company.com', addr: '94th Dundas St', city: 'New York City', state: 'NY', zip: 99994, orders: ['12345', '12346', '12347'] },
      { _id: '5', createdAt: Date('2016-03-01T12:00:00'), updatedAt: Date('2016-03-01T12:00:00'), fname: 'Eco', mname: 'I', lname: 'Foxtrot', homePhone: '9999999995', mobilePhone: '9999999995', email: 'eco@domain.com', workEmail: 'eco@company.com', addr: '95th Dundas St', city: 'New York City', state: 'FL', zip: 99995, orders: ['12345', '12346', '12347'] },
      { _id: '6', createdAt: Date('2016-03-01T12:00:00'), updatedAt: Date('2016-03-01T12:00:00'), fname: 'Foxtrot', mname: 'I', lname: 'Golf', homePhone: '9999999996', mobilePhone: '9999999996', email: 'foxtrot@domain.com', workEmail: 'foxtrot@company.com', addr: '96th Dundas St', city: 'New York City', state: 'CA', zip: 99996, orders: ['12345', '12346', '12347'] },
      { _id: '7', createdAt: Date('2016-03-01T12:00:00'), updatedAt: Date('2016-03-01T12:00:00'), fname: 'Golf', mname: 'I', lname: 'Hotel', homePhone: '9999999997', mobilePhone: '9999999997', email: 'golf@domain.com', workEmail: 'golf@company.com', addr: '97th Dundas St', city: 'New York City', state: 'NY', zip: 99997, orders: ['12345', '12346', '12347'] },
      { _id: '8', createdAt: Date('2016-03-01T12:00:00'), updatedAt: Date('2016-03-01T12:00:00'), fname: 'Hotel', mname: 'I', lname: 'India', homePhone: '9999999998', mobilePhone: '9999999998', email: 'hotel@domain.com', workEmail: 'hotel@company.com', addr: '98th Dundas St', city: 'New York City', state: 'FL', zip: 99998, orders: ['12345', '12346', '12347'] },
      { _id: '9', createdAt: Date('2016-03-01T12:00:00'), updatedAt: Date('2016-03-01T12:00:00'), fname: 'India', mname: 'I', lname: 'Juliet', homePhone: '9999999999', mobilePhone: '9999999999', email: 'india@domain.com', workEmail: 'india@company.com', addr: '99th Dundas St', city: 'New York City', state: 'CA', zip: 99999, orders: ['12345', '12346', '12347'] },
      { _id: '10', createdAt: Date('2016-03-01T12:00:00'), updatedAt: Date('2016-03-01T12:00:00'), fname: 'Juliet', mname: 'I', lname: 'Kilo', homePhone: '9999999990', mobilePhone: '9999999990', email: 'juliet@domain.com', workEmail: 'juliet@company.com', addr: '90th Dundas St', city: 'New York City', state: 'NY', zip: 99990, orders: ['12345', '12346', '12347'] },
    ]

    this.get = (id) => this.customers.find((item) => item._id === id) || undefined

    this.delete = (id) => {
      let i = _.findIndex(this.customers, {'_id': id })
      this.customers.splice(i, 1)
    }

    this.add = (newItem) => {
      let newProps = {
        _id: (Number(this.customers[this.customers.length - 1]._id) + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      angular.extend(newItem, newProps)
      this.customers.push(newItem)
    }

    this.put = (updatedItem) => {
      let i = _.findIndex(this.customers, {'_id': updatedItem._id })
      updatedItem.updatedAt = new Date()
      this.customers[i] = updatedItem
    }
  })
