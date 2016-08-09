'use strict'

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.deliverySettings.radius', {
        url: '/radius',
        onEnter: Modal => Modal.openModal('app/main/settings/delivery/radius-modal.html', 'SettingsDeliveryModalCtrl')
      })
      .state('main.deliverySettings.requests', {
        url: '/requests',
        onEnter: Modal => Modal.openModal('app/main/settings/delivery/requests-modal.html', 'SettingsDeliveryModalCtrl')
      })
      .state('main.deliverySettings.delivery', {
        url: '/delivery',
        onEnter: Modal => Modal.openModal('app/main/settings/delivery/delivery-modal.html', 'SettingsDeliveryModalCtrl')
      })
      .state('main.deliverySettings.additional', {
        url: '/additional',
        onEnter: Modal => Modal.openModal('app/main/settings/delivery/additional-modal.html', 'SettingsDeliveryModalCtrl')
      })
  })
