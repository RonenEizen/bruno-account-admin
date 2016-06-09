'use strict';

angular.module('accountAdminApp', [
    'accountAdminApp.admin'
  , 'accountAdminApp.auth'
  , 'accountAdminApp.constants'
  , 'angularTrix'
  , 'ngCookies'
  , 'ngResource'
  , 'ngSanitize'
  , 'ui.bootstrap'
  , 'ui.mask'
  , 'ui.router'
  , 'ui.select'
  , 'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $locationProvider.html5Mode(true);
  });
