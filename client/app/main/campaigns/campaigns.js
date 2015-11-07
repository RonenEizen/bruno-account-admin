'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.campaigns', {
        abstract: true,
        url: '/campaigns',
        templateUrl: 'app/main/campaigns/campaigns.html',
      })
      .state('main.campaigns.new', {
        url: '/new',
        // template: 'hi',
        templateUrl: 'app/main/campaigns/campaigns.new.html',
        controller: 'CampaignsCtrl'
      })
      .state('main.campaigns.campaign', {
        url: '/:campaignId',
        templateUrl: 'app/main/campaigns/campaigns.campaign.html',
        controller: 'CampaignsCtrl'
      });
      $urlRouterProvider.when('/campaigns', '/campaigns/new');
  });
