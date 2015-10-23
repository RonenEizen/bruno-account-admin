'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.statistics', {
        url: '/statistics',
        templateUrl: 'app/main/statistics/statistics.html',
        controller: 'StatisticsCtrl'
      });
  });