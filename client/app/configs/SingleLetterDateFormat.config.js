'use strict'

angular.module('accountAdminApp')
  .config(function ($provide) {
    $provide.decorator('$locale', function ($delegate) {
      var value = $delegate.DATETIME_FORMATS;
      value.SHORTDAY = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
      return $delegate;
    });
  });
