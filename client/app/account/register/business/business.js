'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business', {
        url: '/register/business',
        templateUrl: 'app/account/register/business/business.html',
        controller: 'BusinessCtrl'
      });
  });
