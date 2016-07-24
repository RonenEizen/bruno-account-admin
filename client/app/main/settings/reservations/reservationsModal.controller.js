'use strict';

angular.module('accountAdminApp')
  .controller('SettingsReservationsModalCtrl', function ($scope, SettingsService, modalObject) {
    $scope.object = modalObject;
  });
