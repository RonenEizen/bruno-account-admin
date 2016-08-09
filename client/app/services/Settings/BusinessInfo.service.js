'use strict'

angular.module('accountAdminApp')
  .service('BusinessInfoService', function () {
    this.businessInfo = {
      business: {
        name: 'Sushi Place',
        email: 'sushi@sushi.com',
        phone: '5553214567',
        addr1: '3000 Ocean Pkwy',
        addr2: 'Suite 222',
        city: 'Brooklyn',
        state: 'NY',
        zip: 11223
      },
      restaurant: {
        sameAsBusiness: false,
        name: 'Sushi Place',
        email: 'sushi@sushi.com',
        phone: '5553214567',
        addr1: '3000 Ocean Pkwy',
        addr2: 'Suite 222',
        city: 'Brooklyn',
        state: 'NY',
        zip: 11223
      },
      owner: {
        fname: 'Blake',
        lname: 'Lively',
        bday: new Date(1986, 3, 10, 0, 0, 0),
        ssn: '123456789',
        email: 'blake@lively.com',
        phone: '5553214567',
        addr1: '3000 Ocean Pkwy',
        addr2: 'Suite 222',
        city: 'Brooklyn',
        state: 'NY',
        zip: 11223,
        country: 'US'
      },
      opening: {
        twentyFourSeven: false,
        weekdays: [
          { name: 'Monday', open: true, split: false, start1: new Date(1970, 0, 1, 14, 57, 0), stop1: new Date(1970, 0, 1, 14, 57, 0), start2: '', stop2: '' },
          { name: 'Tuesday', open: true, split: false, start1: new Date(1970, 0, 1, 14, 57, 0), stop1: new Date(1970, 0, 1, 14, 57, 0), start2: '', stop2: '' },
          { name: 'Wednesday', open: true, split: false, start1: new Date(1970, 0, 1, 14, 57, 0), stop1: new Date(1970, 0, 1, 14, 57, 0), start2: '', stop2: '' },
          { name: 'Thurday', open: false, split: false, start1: new Date(1970, 0, 1, 14, 57, 0), stop1: new Date(1970, 0, 1, 14, 57, 0), start2: '', stop2: '' },
          { name: 'Friday', open: false, split: false, start1: new Date(1970, 0, 1, 14, 57, 0), stop1: new Date(1970, 0, 1, 14, 57, 0), start2: '', stop2: '' },
          { name: 'Saturday', open: false, split: false, start1: new Date(1970, 0, 1, 14, 57, 0), stop1: new Date(1970, 0, 1, 14, 57, 0), start2: '', stop2: '' },
          { name: 'Sunday', open: false, split: false, start1: new Date(1970, 0, 1, 14, 57, 0), stop1: new Date(1970, 0, 1, 14, 57, 0), start2: '', stop2: '' }
        ]
      }
    }

    this.get = () => this.businessInfo || undefined

    this.put = (updatedItem) => {
      updatedItem.updatedAt = new Date();
      this.businessInfo = updatedItem;
    }
  })
