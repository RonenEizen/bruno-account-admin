'use strict';

angular.module('accountAdminApp')
  .controller('SettingsRolesCtrl', function($scope) {
    $scope.pageTitle = 'Roles';
    $scope.roles = $scope.main.roles;

    // Columns
    $scope.displayColumns = { role: true, access: true, rights: true };
    $scope.showColumnPicker = function () {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // Filters
    $scope.openFilter = { role: false, access: false, rights: false };
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
    $scope.displayingRoles = 3; // sets the initial limit of displaying rows
    $scope.loadMore = true; // true if there're more rows to load
    $scope.loadMore = function () {
      var increment = 3;
      if ($scope.displayingRoles < $scope.roles.length) {
        $scope.displayingRoles += increment;
        if ($scope.displayingRoles >= $scope.roles.length) {
          $scope.loadMore = false;
        }
      }
    };
  });
