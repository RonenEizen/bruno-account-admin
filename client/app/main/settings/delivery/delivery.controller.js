'use strict';

angular.module('accountAdminApp')
  .controller('SettingsDeliveryCtrl', function($scope, SettingsService, Modal) {
    $scope.pageTitle = 'Delivery';

    var delivery = SettingsService.delivery;
    $scope.enabled = delivery.enabled;
    $scope.radius = delivery.radius;
    $scope.requests = delivery.requests;
    $scope.additional = delivery.additional;
    $scope.deliveryHours = delivery.deliveryHours;

    // Modal calls
    $scope.additionalModal = Modal.additionalModal;
    $scope.deliveryModal = Modal.deliveryModal;
    $scope.radiusModal = Modal.radiusModal;
    $scope.requestsModal = Modal.requestsModal;
  });
