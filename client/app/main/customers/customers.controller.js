'use strict';

angular.module('accountAdminApp')
  .controller('CustomersCtrl', function ($scope, CustomerService) {
    $scope.pageTitle = 'Customers';

    $scope.customers = CustomerService.customers;

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
    angular.element(document).ready(() => {
      var winHeight = document.querySelector('.main-content').clientHeight;
      $scope.displayingItems = Math.floor((winHeight - 130) / 60); // sets the initial limit of displaying rows
      if ($scope.displayingItems < 3) { $scope.displayingItems = 3 }
    });
    $scope.loadMore = () => {
      var increment = $scope.displayingItems;
      if ($scope.displayingItems < $scope.customers.length) {
        $scope.displayingItems += increment;
        if ($scope.displayingItems >= $scope.customers.length) {
          $scope.moreToLoad = false;
        }
      }
    };
    $scope.moreToLoad = $scope.displayingItems < $scope.customers.length; // true if there're more rows to load
  });
