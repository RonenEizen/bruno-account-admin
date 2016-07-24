'use strict';

angular.module('accountAdminApp')
  .controller('MarketingModalCtrl', function ($scope, MarketingService, modalObject, modalState) {

    $scope.campaignsStatus = ['Cancelled', 'Current', 'Expiring', 'Expired'];
    $scope.campaigns = MarketingService.campaigns;

    $scope.object = modalObject;
    $scope.action = modalState;

  });
