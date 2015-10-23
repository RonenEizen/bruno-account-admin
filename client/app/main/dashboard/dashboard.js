'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/main/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      });
  });