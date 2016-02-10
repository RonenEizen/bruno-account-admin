'use strict';

angular.module('accountAdminApp.auth', [
  'accountAdminApp.constants',
  'accountAdminApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
