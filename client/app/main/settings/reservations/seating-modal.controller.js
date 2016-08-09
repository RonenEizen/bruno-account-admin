'use strict'

angular.module('accountAdminApp')
  .controller('SettingsSeatingModalCtrl', function ($scope, $uibModalInstance, ReservationsSettingsService) {
    const SERVICE = ReservationsSettingsService

    $scope.object = angular.copy(SERVICE.getSeats()) || undefined

    const dismiss = $uibModalInstance.dismiss

    $scope.cancel = () => {
      $scope.object = angular.copy(SERVICE.getSeats())
      dismiss()
    }
    $scope.save = () => {
      SERVICE.putSeats($scope.object)
      dismiss()
    }
  })
