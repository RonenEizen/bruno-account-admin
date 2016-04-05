'use strict';

angular.module('accountAdminApp')
  .controller('SettingsDeliveryCtrl', function($scope, $log) {
    $scope.pageTitle = 'Delivery';

    $scope.delivery = $scope.main.delivery;
    $scope.enabled = $scope.main.delivery.enabled;
    $scope.radius = $scope.main.delivery.radius;
    $scope.requests = $scope.main.delivery.requests;
    $scope.additional = $scope.main.delivery.additional;
    $scope.deliveryHours = $scope.main.delivery.deliveryHours;
  });
