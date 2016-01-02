'use strict';

angular.module('userAdminApp')
  .controller('SettingsUsersAndRolesCtrl', function($scope, $log) {
    $scope.pageTitle = 'Users And Roles';

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
