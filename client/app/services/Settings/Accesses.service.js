'use strict';

angular.module('accountAdminApp')
  .service('AccessesService', function () {
    this.accesses = [
      { _id: '1', name: 'Admin Access', roles: ['1', '2'], rights: ['1', '2', '3', '4', '5'] },
      { _id: '2', name: 'Full Access', roles: ['1', '2', '3'], rights: ['1', '2', '3', '5'] },
      { _id: '3', name: 'Reservations', roles: ['3'], rights: ['1'] },
      { _id: '4', name: 'Orders', roles: ['3', '4', '5'], rights: ['3'] },
      { _id: '5', name: 'Delivery Info', roles: ['7'], rights: ['1', '2', '3', '4'] }
    ];
  });
