'use strict';

angular.module('accountAdminApp')
  .controller('CustomersCtrl', function ($scope) {
    $scope.pageTitle = 'Customers';

    // Columns
    $scope.displayColumns = { name: true, phone: true, email: true, addr: true, zip: true, city: false, homePhone: false, workEmail: false };
    $scope.showColumnPicker = function () {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // Filters
    $scope.openFilter = { name: false, phone: false, email: false, addr: false, zip: false, city: false, workEmail: false };
    $scope.activeFilter = undefined;
    $scope.toggleFilter = function (filterName) {
      if ($scope.openFilter[filterName]) {
        $scope.openFilter[filterName] = false;
      } else {
        for (var x in $scope.openFilter) { $scope.openFilter[x] = false; }
        $scope.invisibleLayer = true;
        $scope.openFilter[filterName] = true;
      }
    };

    // Ordering columns by
    $scope.clickedHeader = '';

    // Load More Rows
    $scope.displayingCustomers = 3; // sets the initial limit of displaying rows
    $scope.loadMore = true; // true if there're more rows to load
    $scope.loadMore = function () {
      var increment = 3;
      if ($scope.displayingCustomers < $scope.customers.length) {
        $scope.displayingCustomers += increment;
        if ($scope.displayingCustomers >= $scope.customers.length) {
          $scope.loadMore = false;
        }
      }
    };

    // FAKE DATA
    $scope.editing = {
      edit: false,
      delete: false,
      fname: 'Hucas',
      mname: '',
      lname: 'Engel',
      phone: 2555555555,
      homePhone: '2555555555',
      email: 'hucasengel@gmail.com',
      addr: '84th Visconde Duprat St.',
      zip: 54551,
      city: 'Lorto Alegre',
      workEmail: 'hucasengel@work.com'
    };
    $scope.customers = [
      { edit: false, fname: 'Hucas', mname: '', lname: 'Engel', phone: 2555555555, homePhone: '2555555555', email: 'hucasengel@gmail.com' , addr: '84th Visconde Duprat St.', zip: 54551, city: 'Lorto Alegre', workEmail: 'hucasengel@work.com' },
      { edit: false, fname: 'Iucas', mname: '', lname: 'Engel', phone: 3555555555, homePhone: '3555555555', email: 'iucasengel@gmail.com' , addr: '85th Visconde Duprat St.', zip: 54552, city: 'Morto Alegre', workEmail: 'iucasengel@work.com' },
      { edit: false, fname: 'Jucas', mname: '', lname: 'Engel', phone: 4555555555, homePhone: '4555555555', email: 'jucasengel@gmail.com' , addr: '86th Visconde Duprat St.', zip: 54553, city: 'Norto Alegre', workEmail: 'jucasengel@work.com' },
      { edit: false, fname: 'Kucas', mname: '', lname: 'Engel', phone: 5555555555, homePhone: '5555555555', email: 'kucasengel@gmail.com' , addr: '87th Visconde Duprat St.', zip: 54554, city: 'Oorto Alegre', workEmail: 'kucasengel@work.com' },
      { edit: false, fname: 'Lucas', mname: '', lname: 'Engel', phone: 1555555555, homePhone: '1555555555', email: 'lucasengel@gmail.com' , addr: '88th Visconde Duprat St.', zip: 54555, city: 'Porto Alegre', workEmail: 'lucasengel@work.com' },
      { edit: false, fname: 'Mucas', mname: '', lname: 'Engel', phone: 2555555555, homePhone: '2555555555', email: 'mucasengel@gmail.com' , addr: '89th Visconde Duprat St.', zip: 54556, city: 'Qorto Alegre', workEmail: 'mucasengel@work.com' },
      { edit: false, fname: 'Nucas', mname: '', lname: 'Engel', phone: 3555555555, homePhone: '3555555555', email: 'nucasengel@gmail.com' , addr: '90th Visconde Duprat St.', zip: 54557, city: 'Rorto Alegre', workEmail: 'nucasengel@work.com' },
      { edit: false, fname: 'Oucas', mname: '', lname: 'Engel', phone: 4555555555, homePhone: '4555555555', email: 'oucasengel@gmail.com' , addr: '91th Visconde Duprat St.', zip: 54558, city: 'Sorto Alegre', workEmail: 'oucasengel@work.com' },
      { edit: false, fname: 'Pucas', mname: '', lname: 'Engel', phone: 5555555555, homePhone: '5555555555', email: 'pucasengel@gmail.com' , addr: '92th Visconde Duprat St.', zip: 54559, city: 'Torto Alegre', workEmail: 'pucasengel@work.com' },
      { edit: false, fname: 'Qucas', mname: '', lname: 'Engel', phone: 6555555555, homePhone: '6555555555', email: 'qucasengel@gmail.com' , addr: '93th Visconde Duprat St.', zip: 54550, city: 'Uorto Alegre', workEmail: 'qucasengel@work.com' },
      { edit: false, fname: 'Yucas', mname: '', lname: 'Engel', phone: 6555555555, homePhone: '6555555555', email: 'yucasengel@gmail.com' , addr: '94th Visconde Duprat St.', zip: 54560, city: 'Vorto Alegre', workEmail: 'yucasengel@work.com' },
      { edit: false, fname: 'Zucas', mname: '', lname: 'Engel', phone: 1555555555, homePhone: '1555555555', email: 'zucasengel@gmail.com' , addr: '95th Visconde Duprat St.', zip: 54561, city: 'Xorto Alegre', workEmail: 'zucasengel@work.com' }
    ];
  });
