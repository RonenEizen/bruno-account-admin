'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.businessInfo.business', {
        url: '/business',
        templateUrl: 'app/main/settings/business-info/businessModal.html',
        controller: 'SettingsBusinessInfoCtrl',
        controllerAr: 'vm'
      })
      .state('main.businessInfo.restaurant', {
        url: '/restaurant',
        templateUrl: 'app/main/settings/business-info/restaurantModal.html',
        controller: 'SettingsBusinessInfoCtrl',
        controllerAr: 'vm'
      })
      .state('main.businessInfo.opening', {
        url: '/opening',
        templateUrl: 'app/main/settings/business-info/openingModal.html',
        controller: 'SettingsBusinessInfoCtrl',
        controllerAr: 'vm'
      })
      .state('main.businessInfo.owner', {
        url: '/owner',
        templateUrl: 'app/main/settings/business-info/ownerModal.html',
        controller: 'SettingsBusinessInfoCtrl',
        controllerAr: 'vm'
      })
  });
