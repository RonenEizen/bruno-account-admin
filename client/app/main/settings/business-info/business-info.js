'use strict'

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.businessInfo.business', {
        url: '/business',
        onEnter: Modal => Modal.openModal('app/main/settings/business-info/business-modal.html', 'SettingsBusinessInfoModalCtrl')
      })
      .state('main.businessInfo.restaurant', {
        url: '/restaurant',
        onEnter: Modal => Modal.openModal('app/main/settings/business-info/restaurant-modal.html', 'SettingsBusinessInfoModalCtrl')
      })
      .state('main.businessInfo.owner', {
        url: '/owner',
        onEnter: Modal => Modal.openModal('app/main/settings/business-info/owner-modal.html', 'SettingsBusinessInfoModalCtrl')
      })
      .state('main.businessInfo.opening', {
        url: '/opening',
        onEnter: Modal => Modal.openModal('app/main/settings/business-info/opening-modal.html', 'SettingsBusinessInfoModalCtrl')
      })
  })
