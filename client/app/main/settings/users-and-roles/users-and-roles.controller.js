'use strict';

angular.module('userAdminApp')
  .controller('UsersAndRolesCtrl', function($scope, $log) {
    // user actions
    $scope.userActions = [{
      id: '1',
      name: 'All Actions'
    }, {
      id: '2',
      name: 'Edit User'
    }, {
      id: '3',
      name: 'Remove User'
    }, {
      id: '4',
      name: 'Make Admin'
    }, {
      id: '5',
      name: 'Transfer Ownership'
    }];

    // add new user
    $scope.addUser = function (name, role, access, phone, email) {
      var newUser = {
        edit: false,
        name: name,
        role: role,
        access: access,
        phone: phone,
        email: email
      };
      $scope.users.push(newUser);
      $scope.clearUser();
    };

    $scope.clearUser = function () {
      $scope.newName = '';
      $scope.newRole = '';
      $scope.newAccess = '';
      $scope.newPhone = '';
      $scope.newEmail = '';
      $scope.addingUser = false;
    };

    // fake data
    $scope.users = [{
      edit: false,
      name: 'Blake Liveley',
      role: '1',
      access: 'Full Access',
      phone: 9173452680,
      email: 'bively@gmail.com'
    }, {
      edit: false,
      name: 'Adam Greenberg',
      role: '2',
      access: 'Full Access',
      phone: 9175668746,
      email: 'adamgreen@gmail.com'
    }, {
      edit: false,
      name: 'Buddy J. Finston',
      role: '3',
      access: 'Reservations, Orders',
      phone: 3476062600,
      email: 'finjlone@yahoo.com'
    }, {
      edit: false,
      name: 'Rosa O\' Bimbel',
      role: '4',
      access: 'Orders',
      phone: 3472223333,
      email: 'doej@gmail.com'
    }, {
      edit: false,
      name: 'Venik Gromofonov',
      role: '5',
      access: 'Orders',
      phone: 3472223333,
      email: 'doej@gmail.com'
    }, {
      edit: false,
      name: 'Ty Robertson',
      role: '6',
      access: 'No Access',
      phone: 3472223333,
      email: 'doej@gmail.com'
    }, {
      edit: false,
      name: 'Iskandr Babekov',
      role: '7',
      access: 'Delivery Info',
      phone: 3472223333,
      email: 'doej@gmail.com'
    }];
    $scope.roles = [{
      edit: false,
      id: '1',
      role: 'Owner',
      access: ['Full Access'],
      rights: ['Edit User Access', 'Remove User', 'Transfer Ownership', 'Make Admin']
    }, {
      edit: false,
      id: '2',
      role: 'Admin',
      access: ['Full Access'],
      rights: ['Edit User Access', 'Remove User', 'Make Admin']
    }, {
      edit: false,
      id: '3',
      role: 'Host',
      access: ['Reservations', 'Orders'],
      rights: ['Edit Reservations', 'Edit Orders']
    }, {
      edit: false,
      id: '4',
      role: 'Chef',
      access: ['Orders'],
      rights: []
    }, {
      edit: false,
      id: '5',
      role: 'Cook',
      access: ['Orders'],
      rights: []
    }, {
      edit: false,
      id: '6',
      role: 'Busboy',
      access: [],
      rights: []
    }, {
      edit: false,
      id: '7',
      role: 'Driver',
      access: ['Delivery Info'],
      rights: []
    }];
  });
