'use strict';

angular.module('accountAdminApp')
  .controller('SettingsDeliveryCtrl', function($scope, DeliveryService) {
    $scope.pageTitle = 'Delivery';

    $scope.enabled = DeliveryService.delivery.enabled;
    $scope.radius = DeliveryService.delivery.radius;
    $scope.requests = DeliveryService.delivery.requests;
    $scope.additional = DeliveryService.delivery.additional;
    $scope.deliveryHours = DeliveryService.delivery.deliveryHours;
  });
