'use strict';

angular.module('accountAdminApp')
  .controller('SettingsDeliveryCtrl', function($scope, SettingsService) {
    $scope.pageTitle = 'Delivery';

    $scope.enabled = SettingsService.delivery.enabled;
    $scope.radius = SettingsService.delivery.radius;
    $scope.requests = SettingsService.delivery.requests;
    $scope.additional = SettingsService.delivery.additional;
    $scope.deliveryHours = SettingsService.delivery.deliveryHours;
  });
