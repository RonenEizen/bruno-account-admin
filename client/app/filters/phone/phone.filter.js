'use strict';

angular.module('accountAdminApp')
  .filter('phone', function () {
    return function (input) {
      if (!input) { return ''; }

      else if (input.length === 10) { // 1234567890 > (123) 456-7890
        var loc = input.slice(0, 3);
        var part1 = input.slice(3,6);
        var part2 = input.slice(6);
        return ('(' + loc + ') ' + part1 + '-' + part2).trim();
      }

      else { return input }
    };
  });
