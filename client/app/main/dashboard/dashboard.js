'use strict'

angular.module('accountAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/main/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('main.dashboard.updates', {
        url: '/updates',
        onEnter: Modal => Modal.openModal('app/main/dashboard/view-updates-modal.html', 'DashboardModalCtrl')
      })
  })
