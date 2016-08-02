'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.businessInfo.business', {
        url: '/business',
        onEnter: function (Modal, SettingsService) {
          Modal.businessModal(SettingsService.businessInfo.business)
        }
      })
      .state('main.businessInfo.restaurant', {
        url: '/restaurant',
        onEnter: function (Modal, SettingsService) {
          Modal.restaurantModal(SettingsService.businessInfo.restaurant)
        }
      })
      .state('main.businessInfo.owner', {
        url: '/owner',
        onEnter: function (Modal, SettingsService) {
          Modal.ownerModal(SettingsService.businessInfo.owner)
        }
      })
      .state('main.businessInfo.opening', {
        url: '/opening',
        onEnter: function (Modal, SettingsService) {
          Modal.openingModal(SettingsService.businessInfo.openingHours)
        }
      });
  });
