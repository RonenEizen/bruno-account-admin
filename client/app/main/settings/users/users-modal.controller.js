'use strict'

angular.module('accountAdminApp')
  .controller('SettingsUsersModalCtrl', function($scope, $uibModalInstance, UsersService, RolesService, modalObject, modalState) {
    const SERVICE = UsersService

    $scope.users = SERVICE.users
    $scope.roles = RolesService.roles

    $scope.object = angular.copy(SERVICE.get(modalObject))
    $scope.action = modalState || 'view'

    const dismiss = $uibModalInstance.dismiss

    $scope.add = () => {
      SERVICE.add($scope.object)
      dismiss()
    }
    $scope.cancel = () => {
      $scope.object = angular.copy(SERVICE.get(modalObject))
      $scope.action = 'view'
    }
    $scope.save = () => {
      SERVICE.put($scope.object)
      dismiss()
    }
    $scope.delete = () => {
      SERVICE.delete(modalObject)
      dismiss()
    }

    $scope.userRole = (roleId) => _.find($scope.roles, ['_id', roleId.toString()]).name
  })
