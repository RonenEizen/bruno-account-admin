'use strict';

angular.module('userAdminApp')
  .service('titlebarService', function ($log) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var pageTitle = 'Page Title';

    this.setPageTitle = function (string) {
      $log.log(pageTitle);
      pageTitle = string;
      $log.log(pageTitle);
      return pageTitle;
    };

    this.getPageTitle = function () {
      return pageTitle;
    };
  });
