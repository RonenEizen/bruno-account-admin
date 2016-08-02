'use strict';

angular.module('accountAdminApp')
  .controller('SettingsDomainModalCtrl', function ($scope, SettingsService, modalObject) {
    $scope.object = modalObject;
  });
