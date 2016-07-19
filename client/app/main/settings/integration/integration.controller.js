'use strict';

angular.module('accountAdminApp')
  .controller('SettingsIntegrationCtrl', function ($scope, $state, SettingsService, Modal) {
    $scope.pageTitle = 'Integrations';

    $scope.integrations = SettingsService.integrations;
    $scope.reviews = SettingsService.reviews;

    // Modal calls
    $scope.integrationModal = Modal.integrationModal;

    var getObject = () => {
      let name = $state.params.name;
      return $scope.integrations[name] || $scope.reviews[name];
    };
    $scope.getName = () => {
      let obj = getObject();
      return obj.name;
    };
    $scope.getImg = () => {
      let obj = getObject();
      return obj.imgUrl;
    };
    $scope.getPlaceholder = () => {
      let obj = getObject();
      return 'Enter ' + obj.name + ' ID';
    };
  });
