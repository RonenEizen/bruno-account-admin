'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.site-builder', {
        url: '/site-builder',
        templateUrl: 'app/main/site-builder/site-builder.html',
        controller: 'SiteBuilderCtrl'
      })
  });
