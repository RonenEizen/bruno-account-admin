'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.marketing', {
        url: '/marketing',
        templateUrl: 'app/main/marketing/marketing.html',
        controller: 'MarketingCtrl'
      });
  });
