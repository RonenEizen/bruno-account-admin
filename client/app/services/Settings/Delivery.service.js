'use strict'

angular.module('accountAdminApp')
  .service('DeliveryService', function () {
    this.delivery = {
      enabled: true,
      radius: {
        unit: 'km',
        long: -51.2300,  // these should be fetched
        latit: -30.0331, // according to restaurant addr
        radius: 5 // this should start blank
      },
      requests: {
        email: {
          enabled: true,
          input: 'blabber@gmail.com'
        },
        phone: {
          enabled: false,
          input: '5551234567'
        },
      },
      additional: {
        minimum: {
          enabled: true,
          input: 15
        },
        surcharge: {
          enabled: true,
          input: 7
        },
        instructions: {
          enabled: true,
          input: 'should be delivered to the neighbor next door'
        }
      },
      deliveryHours: {
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

    this.get = () => this.delivery || undefined

    this.put = (updatedItem) => {
      updatedItem.updatedAt = new Date();
      this.delivery = updatedItem;
    }
  })
