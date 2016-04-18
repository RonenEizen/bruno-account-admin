'use strict';

angular.module('accountAdminApp', [
    'accountAdminApp.auth'
  , 'accountAdminApp.admin'
  , 'accountAdminApp.constants'
  , 'ngCookies'
  , 'ngResource'
  , 'ngSanitize'
  , 'ui.bootstrap'
  , 'ui.router'
  , 'ui.mask'
  , 'validation.match'
  , 'chart.js'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $locationProvider.html5Mode(true);
  });
