'use strict';

angular.module('accountAdminApp')
  .controller('DashboardModalCtrl', function ($scope, modalObject) {
    $scope.object = modalObject
  });
