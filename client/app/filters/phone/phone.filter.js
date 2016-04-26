'use strict';

angular.module('accountAdminApp')
  .filter('phone', function () {
    return function (input) {

      if (input) {
        var phone = input.toString();

        if (phone.length === 10) { // 1234567890 > (123) 456-7890
          var loc = phone.slice(0, 3);
          var part1 = phone.slice(3,6);
          var part2 = phone.slice(6);
          return ('(' + loc + ') ' + part1 + '-' + part2).trim();
        }
      }

      else { return '' }
    };
  });
