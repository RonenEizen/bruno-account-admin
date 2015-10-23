'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.campaigns', {
        url: '/campaigns',
        templateUrl: 'app/main/campaigns/campaigns.html',
        controller: 'CampaignsCtrl'
      });
  });