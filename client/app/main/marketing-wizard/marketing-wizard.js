'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.marketing-wizard', {
        url: '/marketing-wizard',
        templateUrl: 'app/main/marketing-wizard/marketing-wizard.html',
        controller: 'MarketingWizardCtrl'
      });
  });