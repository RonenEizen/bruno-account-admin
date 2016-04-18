'use strict';

angular.module('accountAdminApp')
  .controller('CustomersCtrl', function ($scope) {
    $scope.pageTitle = 'Customers';

    $scope.customers = $scope.main.customers;
    $scope.modal = $scope.main.modal;

    // Columns
    $scope.displayColumns = { name: true, homePhone: true, mobilePhone: false, email: true, addr: true, zip: true, city: false, workEmail: false };
    $scope.showColumnPicker = function () {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // Filters
    $scope.openFilter = { name: false, homePhone: false, mobilePhone: false, email: false, addr: false, zip: false, city: false, workEmail: false };
    $scope.activeFilter = undefined;
    $scope.toggleFilter = (filterName) => {
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
    $scope.loadMore = () => {
      var increment = 3;
      if ($scope.displayingCustomers < $scope.customers.length) {
        $scope.displayingCustomers += increment;
        if ($scope.displayingCustomers >= $scope.customers.length) {
          $scope.loadMore = false;
        }
      }
    };

  });
