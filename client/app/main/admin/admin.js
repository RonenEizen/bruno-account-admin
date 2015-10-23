'use strict';

angular.module('userAdminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.admin', {
        url: '/admin',
        templateUrl: 'app/main/admin/admin.html',
        controller: 'AdminCtrl'
      });
  });