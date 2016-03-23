'use strict';

angular.module('accountAdminApp')
  .service('CustomerService', function () {
    this.customers = [
      { _id: '1', fname: "Alpha", mname: "I", lname: "Bravo", homePhone: "(999) 999-9999", mobilePhone: "(999) 999-9999", email: "name@domain.com", workEmail: "name@domain.com", addr: "99th Dundas St", city: 9999, state: 9, zip: 99999, orders: [12345, 12346, 12347] },
      { _id: '2', fname: "Bravo", mname: "I", lname: "Charlie", homePhone: "(999) 999-9999", mobilePhone: "(999) 999-9999", email: "name@domain.com", workEmail: "name@domain.com", addr: "99th Dundas St", city: 9999, state: 9, zip: 99999, orders: [12345, 12346, 12347] },
      { _id: '3', fname: "Charlie", mname: "I", lname: "Delta", homePhone: "(999) 999-9999", mobilePhone: "(999) 999-9999", email: "name@domain.com", workEmail: "name@domain.com", addr: "99th Dundas St", city: 9999, state: 9, zip: 99999, orders: [12345, 12346, 12347] }
    ];
  });
