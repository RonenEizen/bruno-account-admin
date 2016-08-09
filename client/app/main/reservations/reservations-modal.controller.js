'use strict'

angular.module('accountAdminApp')
  .controller('ReservationsModalCtrl', function ($scope, $uibModalInstance, ReservationService, modalObject, modalState) {
    const SERVICE = ReservationService

    $scope.reservations = SERVICE.reservations
    $scope.object = angular.copy(SERVICE.get(modalObject))
    $scope.action = modalState || 'view'

    // Alerts
    $scope.alerts = [
      { type: 'warning', msg: '<i class="fa fa-exclamation-circle"></i> Table not available. Change date, time or number of seats' },
    ]
    $scope.closeAlert = function(index) { $scope.alerts.splice(index, 1) }

    let dismiss = $uibModalInstance.dismiss

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
  })
