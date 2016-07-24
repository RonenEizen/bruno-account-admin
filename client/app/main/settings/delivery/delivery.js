'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.deliverySettings.radius', {
        url: '/radius',
        onEnter: function (Modal, SettingsService) {
          Modal.radiusModal(SettingsService.delivery.radius)
        }
      })
      .state('main.deliverySettings.requests', {
        url: '/requests',
        onEnter: function (Modal, SettingsService) {
          Modal.requestsModal(SettingsService.delivery.requests)
        }
      })
      .state('main.deliverySettings.delivery', {
        url: '/delivery',
        onEnter: function (Modal, SettingsService) {
          Modal.deliveryModal(SettingsService.delivery.deliveryHours)
        }
      })
      .state('main.deliverySettings.additional', {
        url: '/additional',
        onEnter: function (Modal, SettingsService) {
          Modal.additionalModal(SettingsService.delivery.additional)
        }
      });
  });
