'use strict';

angular.module('accountAdminApp')
  .filter('ssn', function () {
    return function (input) {

      if (input) {
        var ssn = input.toString();

        if (ssn.length === 9) { // 111223333 > 111-22-3333
          var part1 = ssn.slice(0, 3);
          var part2 = ssn.slice(3,5);
          var part3 = ssn.slice(5);
          return (part1 + '-' + part2 + '-' + part3).trim();
        }
      }

      else { return ssn }
    };
  });
