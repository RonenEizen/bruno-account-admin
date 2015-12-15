'use strict';

angular.module('userAdminApp')
  .controller('CustomersCtrl', function ($scope) {
    $scope.clickedHeader = 'name';

    $scope.displayingCustomers = 3;

    $scope.loadMore = true;

    $scope.loadMore = function () {
      var increment = 3;
      if ($scope.displayingCustomers < $scope.customers.length) {
        $scope.displayingCustomers += increment;
        if ($scope.displayingCustomers >= $scope.customers.length) {
          $scope.loadMore = false;
        }
      }
    };

    // fake data
    $scope.customers = [
      { name: 'Hucas Engel', phone: 2555555555, email: 'hucasengel@gmail.com' , addr: '84th Visconde Duprat St.', zip: 54551 },
      { name: 'Iucas Engel', phone: 3555555555, email: 'iucasengel@gmail.com' , addr: '85th Visconde Duprat St.', zip: 54552 },
      { name: 'Jucas Engel', phone: 4555555555, email: 'jucasengel@gmail.com' , addr: '86th Visconde Duprat St.', zip: 54553 },
      { name: 'Kucas Engel', phone: 5555555555, email: 'kucasengel@gmail.com' , addr: '87th Visconde Duprat St.', zip: 54554 },
      { name: 'Lucas Engel', phone: 1555555555, email: 'lucasengel@gmail.com' , addr: '88th Visconde Duprat St.', zip: 54555 },
      { name: 'Mucas Engel', phone: 2555555555, email: 'mucasengel@gmail.com' , addr: '89th Visconde Duprat St.', zip: 54556 },
      { name: 'Nucas Engel', phone: 3555555555, email: 'nucasengel@gmail.com' , addr: '90th Visconde Duprat St.', zip: 54557 },
      { name: 'Oucas Engel', phone: 4555555555, email: 'oucasengel@gmail.com' , addr: '91th Visconde Duprat St.', zip: 54558 },
      { name: 'Pucas Engel', phone: 5555555555, email: 'pucasengel@gmail.com' , addr: '92th Visconde Duprat St.', zip: 54559 },
      { name: 'Qucas Engel', phone: 6555555555, email: 'qucasengel@gmail.com' , addr: '93th Visconde Duprat St.', zip: 54550 },
      { name: 'Yucas Engel', phone: 6555555555, email: 'yucasengel@gmail.com' , addr: '94th Visconde Duprat St.', zip: 54560 },
      { name: 'Zucas Engel', phone: 1555555555, email: 'zucasengel@gmail.com' , addr: '95th Visconde Duprat St.', zip: 54561 }
    ];
  });
