'use strict';

angular.module('accountAdminApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.marketing', {
        url: '/marketing',
        templateUrl: 'app/main/marketing/marketing.html',
        controller: 'MarketingCtrl'
      })
      .state('main.marketing.create', {
        url: '/create',
        templateUrl: 'app/main/marketing/createCampaignModal.html'
      })
      .state('main.marketing.campaign', {
        abstract: true,
        url: '/:_id',
        templateUrl: 'app/main/marketing/campaignModal.html'
      })
      .state('main.marketing.campaign.view', {
        url: '/view',
        templateUrl: 'app/main/marketing/viewCampaignModal.html'
      })
      .state('main.marketing.campaign.edit', {
        url: '/edit',
        templateUrl: 'app/main/marketing/editCampaignModal.html'
      })
      .state('main.marketing.campaign.facebook', {
        url: '/facebook',
        templateUrl: 'app/main/marketing/facebookCampaignModal.html'
      })
      .state('main.marketing.campaign.twitter', {
        url: '/twitter',
        templateUrl: 'app/main/marketing/twitterCampaignModal.html'
      })
      .state('main.marketing.campaign.google', {
        url: '/google',
        templateUrl: 'app/main/marketing/googleCampaignModal.html'
      })
      .state('main.marketing.campaign.newsletter', {
        url: '/newsletter',
        templateUrl: 'app/main/marketing/newsletterCampaignModal.html'
      })
      .state('main.marketing.campaign.banner', {
        url: '/banner',
        templateUrl: 'app/main/marketing/bannerCampaignModal.html'
      });
    $urlRouterProvider
      .when('/marketing/:id', '/marketing/:id/view');
  });
