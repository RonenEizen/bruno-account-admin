'use strict';

angular.module('userAdminApp')
  .controller('CustomersCtrl', function ($scope) {
    $scope.customers = [
      { name: 'Lucas Engel', phone: 1555555555, email: 'lucasengel@gmail.com' , addr: '83th Visconde Duprat St.', zip: 54551 },
      { name: 'Mucas Engel', phone: 2555555555, email: 'mucasengel@gmail.com' , addr: '84th Visconde Duprat St.', zip: 54552 },
      { name: 'Nucas Engel', phone: 3555555555, email: 'nucasengel@gmail.com' , addr: '85th Visconde Duprat St.', zip: 54553 },
      { name: 'Oucas Engel', phone: 4555555555, email: 'oucasengel@gmail.com' , addr: '86th Visconde Duprat St.', zip: 54554 },
      { name: 'Pucas Engel', phone: 5555555555, email: 'pucasengel@gmail.com' , addr: '87th Visconde Duprat St.', zip: 54555 },
      { name: 'Qucas Engel', phone: 6555555555, email: 'qucasengel@gmail.com' , addr: '88th Visconde Duprat St.', zip: 54556 }
    ];
  });
