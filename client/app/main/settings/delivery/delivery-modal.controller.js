'use strict';

angular.module('accountAdminApp')
  .controller('SettingsDeliveryModalCtrl', function($scope, $uibModalInstance, DeliveryService) {
    const SERVICE = DeliveryService

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
