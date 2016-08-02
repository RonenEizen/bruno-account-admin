'use strict';

angular.module('accountAdminApp')
  .controller('SettingsUsersModalCtrl', function($scope, SettingsService, modalObject, modalState) {

    $scope.users = SettingsService.users;
    $scope.roles = SettingsService.roles;
    // $scope.object = modalObject;
    $scope.object = $scope.users[0]
    $scope.action = modalState;

    // $scope.getUserData = (id) => _.find($scope.users, [ '_id', id.toString() ]);
    $scope.userRole = (roleId) => _.find($scope.roles, ['_id', roleId.toString()]).name;
  });
