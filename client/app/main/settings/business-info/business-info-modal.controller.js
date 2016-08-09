'use strict';

angular.module('accountAdminApp')
  .controller('SettingsBusinessInfoModalCtrl', function($scope, $uibModalInstance, BusinessInfoService) {
    const SERVICE = BusinessInfoService

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
