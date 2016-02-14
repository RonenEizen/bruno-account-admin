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
  , 'mp.datePicker'
  , 'validation.match'
  , 'wu.masonry'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $locationProvider.html5Mode(true);
  });
