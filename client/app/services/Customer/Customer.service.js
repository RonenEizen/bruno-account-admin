'use strict';

angular.module('accountAdminApp')
  .service('CustomerService', function () {
    this.customers = [
      { _id: '1', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), fname: 'Alpha', mname: 'I', lname: 'Bravo', homePhone: '(999) 999-9991', mobilePhone: '(999) 999-9991', email: 'alpha@domain.com', workEmail: 'alpha@company.com', addr: '91th Dundas St', city: 'New York City', state: '1', zip: 99991, orders: ['12345', '12346', '12347'] },
      { _id: '2', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), fname: 'Bravo', mname: 'I', lname: 'Charlie', homePhone: '(999) 999-9992', mobilePhone: '(999) 999-9992', email: 'bravo@domain.com', workEmail: 'bravo@company.com', addr: '92th Dundas St', city: 'New York City', state: '2', zip: 99992, orders: ['12345', '12346', '12347'] },
      { _id: '3', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), fname: 'Charlie', mname: 'I', lname: 'Delta', homePhone: '(999) 999-9993', mobilePhone: '(999) 999-9993', email: 'charlie@domain.com', workEmail: 'charlie@company.com', addr: '93th Dundas St', city: 'New York City', state: '3', zip: 99993, orders: ['12345', '12346', '12347'] },
      { _id: '4', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), fname: 'Delta', mname: 'I', lname: 'Eco', homePhone: '(999) 999-9994', mobilePhone: '(999) 999-9994', email: 'delta@domain.com', workEmail: 'delta@company.com', addr: '94th Dundas St', city: 'New York City', state: '1', zip: 99994, orders: ['12345', '12346', '12347'] },
      { _id: '5', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), fname: 'Eco', mname: 'I', lname: 'Foxtrot', homePhone: '(999) 999-9995', mobilePhone: '(999) 999-9995', email: 'eco@domain.com', workEmail: 'eco@company.com', addr: '95th Dundas St', city: 'New York City', state: '2', zip: 99995, orders: ['12345', '12346', '12347'] },
      { _id: '6', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), fname: 'Foxtrot', mname: 'I', lname: 'Golf', homePhone: '(999) 999-9996', mobilePhone: '(999) 999-9996', email: 'foxtrot@domain.com', workEmail: 'foxtrot@company.com', addr: '96th Dundas St', city: 'New York City', state: '3', zip: 99996, orders: ['12345', '12346', '12347'] },
      { _id: '7', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), fname: 'Golf', mname: 'I', lname: 'Hotel', homePhone: '(999) 999-9997', mobilePhone: '(999) 999-9997', email: 'golf@domain.com', workEmail: 'golf@company.com', addr: '97th Dundas St', city: 'New York City', state: '1', zip: 99997, orders: ['12345', '12346', '12347'] },
      { _id: '8', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), fname: 'Hotel', mname: 'I', lname: 'India', homePhone: '(999) 999-9998', mobilePhone: '(999) 999-9998', email: 'hotel@domain.com', workEmail: 'hotel@company.com', addr: '98th Dundas St', city: 'New York City', state: '2', zip: 99998, orders: ['12345', '12346', '12347'] },
      { _id: '9', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), fname: 'India', mname: 'I', lname: 'Juliet', homePhone: '(999) 999-9999', mobilePhone: '(999) 999-9999', email: 'india@domain.com', workEmail: 'india@company.com', addr: '99th Dundas St', city: 'New York City', state: '3', zip: 99999, orders: ['12345', '12346', '12347'] },
      { _id: '10', createdAt: new Date('20160301T12:00:00'), updatedAt: new Date('20160301T12:00:00'), fname: 'Juliet', mname: 'I', lname: 'Kilo', homePhone: '(999) 999-9990', mobilePhone: '(999) 999-9990', email: 'juliet@domain.com', workEmail: 'juliet@company.com', addr: '90th Dundas St', city: 'New York City', state: '1', zip: 99990, orders: ['12345', '12346', '12347'] },
    ];
    this.add = (newCustomer) => {
      let newProps = {
        _id: (Number(this.customers[this.customers.length - 1]._id) + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      angular.extend(newCustomer, newProps);
      this.customers.push(newCustomer);
    };
    this.update = (updatedCustomer) => {
      updatedCustomer.updatedAt = new Date();
      this.customers.forEach((cust) => {
        if(cust._id === updatedCustomer._id){
          console.log(cust);
        }
      });
      // splice and add to index
    };
  });
