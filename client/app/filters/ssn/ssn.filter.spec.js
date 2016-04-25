'use strict';

describe('Filter: ssn', function () {

  // load the filter's module
  beforeEach(module('accountAdminApp'));

  // initialize a new instance of the filter before each test
  var ssn;
  beforeEach(inject(function ($filter) {
    ssn = $filter('ssn');
  }));

  it('should return the input prefixed with "ssn filter:"', function () {
    var text = 'angularjs';
    expect(ssn(text)).toBe('ssn filter: ' + text);
  });

});
