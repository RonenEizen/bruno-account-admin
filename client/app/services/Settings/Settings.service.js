'use strict';

angular.module('accountAdminApp')
  .service('SettingsService', function () {
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
      openingHours: {
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
    };
    this.users = [
      { _id: '1', fname: 'Lucas', mname: 'F', lname: 'Engel', role: '1', phone: '9999999999', email: 'lucasengel@gmail.com' },
      { _id: '2', fname: 'Blake', mname: '', lname: 'Liveley', role: '2', phone: '9173452680', email: 'bively@gmail.com' },
      { _id: '3', fname: 'Adam', mname: '', lname: 'Greenberg', role: '3', phone: '9175668746', email: 'adamgreen@gmail.com' },
      { _id: '4', fname: 'Buddy', mname: 'J.', lname: ' Finston', role: '4', phone: '3476062600', email: 'finjlone@yahoo.com' },
      { _id: '5', fname: 'Rosa', mname: '', lname: 'O\'Bimbel', role: '5', phone: '3472223333', email: 'doej@gmail.com' },
      { _id: '6', fname: 'Venik', mname: '', lname: 'Gromofonov', role: '6', phone: '3472223333', email: 'doej@gmail.com' },
      { _id: '7', fname: 'Ty', mname: '', lname: 'Robertson', role: '7', phone: '3472223333', email: 'doej@gmail.com' },
      { _id: '8', fname: 'Iskandr', mname: '', lname: 'Babekov', role: '7', phone: '3472223333', email: 'doej@gmail.com' }
    ];
    this.roles = [
      { _id: '1', name: 'Owner', accesses: ['1'], singleton: true },
      { _id: '2', name: 'Admin', accesses: ['1'], singleton: false },
      { _id: '3', name: 'Host', accesses: ['3', '4'], singleton: false },
      { _id: '4', name: 'Chef', accesses: ['4'], singleton: false },
      { _id: '5', name: 'Cook', accesses: ['4'], singleton: false },
      { _id: '6', name: 'Busboy', accesses: [], singleton: false },
      { _id: '7', name: 'Driver', accesses: ['5'], singleton: false }
    ];
    this.accesses = [
      { _id: '1', name: 'Admin Access', roles: ['1', '2'], rights: ['1', '2', '3', '4', '5'] },
      { _id: '2', name: 'Full Access', roles: ['1', '2', '3'], rights: ['1', '2', '3', '5'] },
      { _id: '3', name: 'Reservations', roles: ['3'], rights: ['1'] },
      { _id: '4', name: 'Orders', roles: ['3', '4', '5'], rights: ['3'] },
      { _id: '5', name: 'Delivery Info', roles: ['7'], rights: ['1', '2', '3', '4'] }
    ];
    this.rights = [
      { _id: '1', name: 'Edit Reservations', accesses: ['1', '2', '3'] },
      { _id: '2', name: 'Edit Settings', accesses: ['1', '2'] },
      { _id: '3', name: 'Edit Orders', accesses: ['1', '2', '4'] },
      { _id: '4', name: 'Edit Users', accesses: ['1', '2'] },
      { _id: '5', name: 'View Roles', accesses: ['5'] }
    ];
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
    };
    this.reservations = {
      tables: [
        { _id: '1', name: 'Booth', capacity: 6, quantity: 5, mergeable: false },
        { _id: '2', name: 'Window', capacity: 2, quantity: 2, mergeable: true }
      ],
      seatings: 52
    };
    this.onlinePayments = {
      enabled: true,
      bankName: 'My Bank',
      routingNo: 1234,
      accountNo: 123456789
    };
    this.domain = {
      subdomain: 'sushibar',
      domain: 'sushi.bar'
    };
    this.integrations = {
      bookatable: { apiKey: '12345ABC&^', name: 'Bookatable', imgUrl: 'http://d1zwyexo3ug1ac.cloudfront.net/revision-e6148ed/images/pages/bookatable_logo.jpg' },
      seamless: { apiKey: '12345ABC&^', name: 'seamless', imgUrl: 'http://borntocoupon.com/wp-content/uploads/2015/02/Seamless-logo.png' },
      seatme: { apiKey: '', name: 'SeatMe', imgUrl: 'https://github-jobs.s3.amazonaws.com/aa017848-3710-11e1-948e-e2fa802ba968.png' },
      opentable: { apiKey: '', name: 'OpenTable', imgUrl: 'http://www.pricelinegroup.com/wp-content/uploads/2014/07/1_Brand_logo-435x110_x2-435x110@2x.png' },
      grubhub: { apiKey: '12345ABC&^', name: 'grubHub', imgUrl: 'https://snowulf.com/wp-content/uploads/2015/11/grubhub.png' }
    };
    this.reviews = {
      menupages: { apiKey: '12345ABC&^', name: 'MenuPages', imgUrl: 'http://culintro.com/media/files/page/menu-pages.png' },
      yelp: { apiKey: '12345ABC&^', name: 'yelp', imgUrl: 'http://static1.squarespace.com/static/54c8415ce4b0b5c877bc5bf9/55709f2ae4b0467afc6e7950/55709f59e4b00405e9c5b2e0/1433444338056/yelp.png' },
      tripadvisor: { apiKey: '', name: 'TripAdvisor', imgUrl: 'https://static.tacdn.com/img2/branding/TA_550x370.png' }
    };
  });
