'use strict';

angular.module('accountAdminApp')
  .controller('SettingsIntegrationModalCtrl', function ($scope, $uibModalInstance, IntegrationsService, modalObject) {
    const SERVICE = IntegrationsService


    $scope.integrations = SERVICE.integrations;
    $scope.reviews = SERVICE.reviews;

    $scope.object = angular.copy(SERVICE.get(modalObject))
    console.log(modalObject, $scope.object)

    const dismiss = $uibModalInstance.dismiss

    $scope.cancel = () => {
      $scope.object = angular.copy(SERVICE.get(modalObject))
      dismiss()
    }
    $scope.save = () => {
      SERVICE.put($scope.object)
      dismiss()
    }
  });
