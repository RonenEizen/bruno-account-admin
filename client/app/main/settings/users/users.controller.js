'use strict';

angular.module('userAdminApp')
  .controller('SettingsUsersCtrl', function($scope, $log) {
    $scope.pageTitle = 'Users';

    // Columns
    $scope.displayColumns = { name: true, role: true, phone: true, email: true };
    $scope.showColumnPicker = function () {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // Filters
    $scope.openFilter = { name: false, role: false, phone: false, email: false };
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
    $scope.displayingUsers = 3; // sets the initial limit of displaying rows
    $scope.loadMore = true; // true if there're more rows to load
    $scope.loadMore = function () {
      var increment = 3;
      if ($scope.displayingUsers < $scope.users.length) {
        $scope.displayingUsers += increment;
        if ($scope.displayingUsers >= $scope.users.length) {
          $scope.loadMore = false;
        }
      }
    };

    // fake data
    $scope.usersTemp = [];
    $scope.users = [
      { edit: false, name: 'Blake Liveley', role: 'Owner', phone: 9173452680, email: 'bively@gmail.com', selection: '1' },
      { edit: false, name: 'Adam Greenberg', role: 'Admin', phone: 9175668746, email: 'adamgreen@gmail.com', selection: '1' },
      { edit: false, name: 'Buddy J. Finston', role: 'Host', phone: 3476062600, email: 'finjlone@yahoo.com', selection: '1' },
      { edit: false, name: 'Rosa O\' Bimbel', role: 'Chef', phone: 3472223333, email: 'doej@gmail.com', selection: '1' },
      { edit: false, name: 'Venik Gromofonov', role: 'Cook', phone: 3472223333, email: 'doej@gmail.com', selection: '1' },
      { edit: false, name: 'Ty Robertson', role: 'Busboy', phone: 3472223333, email: 'doej@gmail.com', selection: '1' },
      { edit: false, name: 'Iskandr Babekov', role: 'Driver', phone: 3472223333, email: 'doej@gmail.com', selection: '1' }
    ];


    // ===== //
    // USERS //
    // ===== //

    // user actions
    $scope.userActions = [
      { id: '1', name: 'All Actions'},
      { id: '2', name: 'Edit User'},
      { id: '3', name: 'Remove User'},
      { id: '4', name: 'Make Admin'},
      { id: '5', name: 'Transfer Ownership'}
    ];

    // what happens when user chooses an action
    $scope.actionChange = function(selection, index) {
      switch (selection.selection) {
        case '2': // edit - will copy fields to a temporary variable so they can be restored later
          if ($scope.usersTemp.length === 0) {
            $scope.usersTemp = angular.copy($scope.users);
            $log.log('copying everything');
          } else {
            $scope.usersTemp.splice(index,1,$scope.users[index]);
            $log.log('copying one');
          }
          $scope.users[index].edit = true;
          $log.log($scope.usersTemp);
          break;
        case '3': // remove
          $scope.users.splice(index, 1);
          $scope.users[index].selection = '1';
          break;
        case '4': // make admin
          $scope.users[index].role = 'Admin';
          $scope.users[index].selection = '1';
          break;
        case '5': // transfer ownership
          $scope.users[index].role = 'Owner';
          $scope.users[index].selection = '1';
          break;
        default:
          break;
      }
    };

    $scope.cancelUser = function (index) {
      $scope.users[index] = angular.copy($scope.usersTemp[index]);
      $scope.users[index].edit = false;
      $scope.users[index].selection = '1';
    };

    $scope.updateUser = function (index) {
      $scope.users[index].edit = false;
      $scope.users[index].selection = '1';
    };

    $scope.clearUser = function() {
      $scope.newUserName = '';
      $scope.newUserRole = '';
      $scope.newUserPhone = '';
      $scope.newUserEmail = '';
      $scope.addingUser = false;
    };

    // add new user
    $scope.addUser = function(name, role, phone, email) {
      var newUser = {
        edit: false,
        name: name,
        role: role,
        phone: phone,
        email: email,
        selection: '1'
      };
      $scope.users.push(newUser);
      $scope.clearUser();
    };
  });
