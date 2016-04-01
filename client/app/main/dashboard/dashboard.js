'use strict';

angular.module('accountAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/main/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('main.dashboard.table', {
        url: '/table',
        templateUrl: 'app/main/dashboard/viewTableModal.html',
        controller: 'DashboardCtrl',
        controllerAs: 'vm'
      })
      .state('main.dashboard.updates', {
        url: '/updates',
        templateUrl: 'app/main/dashboard/viewUpdatesModal.html',
        controller: 'DashboardCtrl',
        controllerAs: 'vm'
      })
  });
