'use strict';

angular.module('accountAdminApp')
  .controller('SettingsUsersCtrl', function($scope, $state) {
    $scope.pageTitle = 'Users';
    $scope.users = $scope.main.users;

    $scope.userId = $state.params._id;
    $scope.getData = (id) => {
      let match = _.findIndex($scope.users, (u) => {
        return u._id == id;
      });

      return $scope.users[match];
    };

    $scope.userRole = (roleID) => {
      let roles = $scope.main.roles;
      let match = _.findIndex(roles, (r) => {
        return r._id == roleID;
      });

      return (roles[match].role);
    };

    // Columns
    $scope.displayColumns = {
      name: true,
      role: true,
      phone: true,
      email: true
    };
    $scope.showColumnPicker = () => {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // Filters
    $scope.openFilter = {
      name: false,
      role: false,
      phone: false,
      email: false
    };
    $scope.activeFilter = undefined;
    $scope.toggleFilter = (filterName) => {
      if ($scope.openFilter[filterName]) {
        $scope.openFilter[filterName] = false;
      } else {
        for (var x in $scope.openFilter) {
          $scope.openFilter[x] = false;
        }
        $scope.invisibleLayer = true;
        $scope.openFilter[filterName] = true;
      }
    };

    // Ordering columns by
    $scope.clickedHeader = '';

    // Load More Rows
    $scope.displayingUsers = 3; // sets the initial limit of displaying rows
    $scope.loadMore = true; // true if there're more rows to load
    $scope.loadMore = () => {
      var increment = 3;
      if ($scope.displayingUsers < $scope.users.length) {
        $scope.displayingUsers += increment;
        if ($scope.displayingUsers >= $scope.users.length) {
          $scope.loadMore = false;
        }
      }
    };
  });
