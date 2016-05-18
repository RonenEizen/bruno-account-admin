'use strict';

angular.module('accountAdminApp')
  .directive('channelHeader', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/channelHeader/channelHeader.html'
    };
  });
