'use strict';

angular.module('accountAdminApp')
  .controller('SettingsDomainModalCtrl', function ($scope, $uibModalInstance, DomainService) {
    const SERVICE = DomainService

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
