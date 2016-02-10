'use strict';

angular.module('accountAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.statistics', {
        url: '/statistics',
        templateUrl: 'app/main/statistics/statistics.html',
        controller: 'StatisticsCtrl'
      });
  });