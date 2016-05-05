'use strict';

angular.module('accountAdminApp')
  .directive('tagList', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        var toView = function (val) {
          return (val || []).join(', ');
        };

        var toModel = function (val) {
          return (val || '')
            .split(',')
            .map(function (v) {
              return v.trim();
            });
        };

        ngModel.$formatters.unshift(toView);
        ngModel.$parsers.unshift(toModel);
      }
    };
  });
