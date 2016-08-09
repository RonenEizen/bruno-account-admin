'use strict'

angular.module('accountAdminApp')
  .controller('SettingsReservationsModalCtrl', function ($scope, $uibModalInstance, ReservationsSettingsService, modalObject) {
    const SERVICE = ReservationsSettingsService

    $scope.object = angular.copy(SERVICE.getTable(modalObject)) || {}

    const dismiss = $uibModalInstance.dismiss

    $scope.add = () => {
      SERVICE.addTable($scope.object)
      dismiss()
    }
    $scope.cancel = () => {
      $scope.object = angular.copy(SERVICE.getTable(modalObject))
      dismiss()
    }
    $scope.save = () => {
      SERVICE.putTable($scope.object)
      dismiss()
    }
    $scope.delete = () => {
      SERVICE.deleteTable(modalObject)
      dismiss()
    }
  })
