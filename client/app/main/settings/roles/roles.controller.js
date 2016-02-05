'use strict';

angular.module('userAdminApp')
  .controller('SettingsRolesCtrl', function($scope) {
    $scope.pageTitle = 'Roles';

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


    // fake data
    $scope.rolesTemp = [];
    $scope.roles = [
      { edit: false, role: 'Owner', access: ['Full Access'] },
      { edit: false, role: 'Admin', access: ['Full Access'] },
      { edit: false, role: 'Host', access: ['Reservations', 'Orders'] },
      { edit: false, role: 'Chef', access: ['Orders'] },
      { edit: false, role: 'Cook', access: ['Orders'] },
      { edit: false, role: 'Busboy', access: [] },
      { edit: false, role: 'Driver', access: ['Delivery Info'] }
    ];

    $scope.accesses = [
      { name: 'Full Access', rights: ['Edit User Access', 'Remove User', 'Transfer Ownership', 'Make Admin'] },
      { name: 'Reservations', rights: ['Edit Reservations'] },
      { name: 'Orders', rights: ['Edit Orders'] },
      { name: 'Delivery Info', rights: [] }
    ];


    // ===== //
    // ROLES //
    // ===== //

    $scope.editRole = function (index) {
      if ($scope.rolesTemp.length === 0) {
        $scope.rolesTemp = angular.copy($scope.roles);
      } else {
        $scope.rolesTemp.splice(index,1,$scope.roles[index]);
      }
      $scope.roles[index].edit = true;
    };

    $scope.cancelRole = function (index) {
      $scope.roles[index] = angular.copy($scope.rolesTemp[index]);
      $scope.roles[index].edit = false;
      $scope.roles[index].selection = '1';
    };

    $scope.updateRole = function (index) {
      $scope.roles[index].edit = false;
      $scope.roles[index].selection = '1';
    };

    $scope.clearRole = function() {
      $scope.newRole = '';
      $scope.newAccess = '';
      $scope.addingRole = false;
    };

    // add new role
    $scope.addRole = function(role, access) {
      var newRole = {
        edit: false,
        role: role,
        access: access
      };
      $scope.roles.push(newRole);
      $scope.clearRole();
    };
  });
