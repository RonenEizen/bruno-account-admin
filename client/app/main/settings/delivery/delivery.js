'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.deliverySettings.radius', {
        url: '/radius',
        templateUrl: 'app/main/settings/delivery/radiusModal.html',
        controller: 'SettingsDeliveryCtrl',
        controllerAs: 'vm'
      })
      .state('main.deliverySettings.requests', {
        url: '/requests',
        templateUrl: 'app/main/settings/delivery/requestsModal.html',
        controller: 'SettingsDeliveryCtrl',
        controllerAs: 'vm'
      })
      .state('main.deliverySettings.delivery', {
        url: '/delivery',
        templateUrl: 'app/main/settings/delivery/deliveryModal.html',
        controller: 'SettingsDeliveryCtrl',
        controllerAs: 'vm'
      })
      .state('main.deliverySettings.additional', {
        url: '/additional',
        templateUrl: 'app/main/settings/delivery/additionalModal.html',
        controller: 'SettingsDeliveryCtrl',
        controllerAs: 'vm'
      });
  });
