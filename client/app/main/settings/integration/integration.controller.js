'use strict';

angular.module('accountAdminApp')
  .controller('SettingsIntegrationCtrl', function ($scope, $state) {
    $scope.pageTitle = 'Integrations';

    $scope.integrations = $scope.main.integrations;
    $scope.reviews = $scope.main.reviews;

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
