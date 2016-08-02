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
        onEnter: function (Modal) {
          Modal.createCampaignModal()
        }
      })
      .state('main.marketing.campaign', {
        url: '/:id/:state',
        onEnter: function (Modal, MarketingService, $stateParams) {
          Modal.campaignModal(_.find(MarketingService.campaigns, { '_id': $stateParams.id }), $stateParams.state)
        }
      })
    $urlRouterProvider
      .when('/marketing/:id', '/marketing/:id/view');
  });
