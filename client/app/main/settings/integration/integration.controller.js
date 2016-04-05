'use strict';

angular.module('accountAdminApp')
  .controller('SettingsIntegrationCtrl', function ($scope) {
    $scope.pageTitle = 'Integrations';

    $scope.integrations = $scope.main.integrations;
    $scope.reviews = $scope.main.reviews;

    $scope.toggle = function (element) { element.collapsed = !element.collapsed; };
    $scope.edit = function (element) {
      if (!element.edit) {
        element.edit = true;
        element.collapsed = false;
      }
    };
    $scope.save = function (element) {
      element.edit = false;
    };
  });
