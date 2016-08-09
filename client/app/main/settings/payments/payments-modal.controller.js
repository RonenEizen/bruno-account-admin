'use strict';

angular.module('accountAdminApp')
  .controller('SettingsPaymentsModalCtrl', function ($scope, $uibModalInstance, PaymentsService) {
    const SERVICE = PaymentsService

    $scope.object = angular.copy(SERVICE.get())

    const dismiss = $uibModalInstance.dismiss

    $scope.cancel = () => {
      $scope.object = angular.copy(SERVICE.get())
      dismiss()
    }
    $scope.save = () => {
      SERVICE.put($scope.object)
      dismiss()
    }
  });
