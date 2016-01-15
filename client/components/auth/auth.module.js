'use strict';

angular.module('userAdminApp.auth', [
  'userAdminApp.constants',
  'userAdminApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
