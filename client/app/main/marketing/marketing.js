'use strict';

angular.module('accountAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.marketing', {
        url: '/marketing',
        templateUrl: 'app/main/marketing/marketing.html',
        controller: 'MarketingCtrl'
      })
      .state('main.marketing.create', {
        url: '/create',
        templateUrl: 'app/main/marketing/createCampaignModal.html',
        controller: 'MarketingCtrl',
        controllerAs: 'vm'
      })
      .state('main.marketing.view', {
        url: '/view',
        templateUrl: 'app/main/marketing/viewCampaignModal.html',
        controller: 'MarketingCtrl',
        controllerAs: 'vm'
      })
      .state('main.marketing.channels', {
        url: '/channels',
        templateUrl: 'app/main/marketing/channelsCampaign.html',
        controller: 'MarketingCtrl',
        controllerAs: 'vm'
      })
  });
