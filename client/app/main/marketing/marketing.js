'use strict'

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
        onEnter: Modal => Modal.openModal('app/main/marketing/create-campaign-modal.html', 'MarketingModalCtrl')
      })
      .state('main.marketing.campaign', {
        url: '/:id?state',
        onEnter: (Modal, $stateParams) => Modal.openModal('app/main/marketing/campaign-modal.html', 'MarketingModalCtrl', $stateParams.id, $stateParams.state)
      })
  })
