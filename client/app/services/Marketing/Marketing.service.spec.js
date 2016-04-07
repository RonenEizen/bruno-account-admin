'use strict';

describe('Service: MarketingService', function () {

  // load the service's module
  beforeEach(module('accountAdminApp'));

  // instantiate service
  var Marketing;
  beforeEach(inject(function (_Marketing_) {
    Marketing = _Marketing_;
  }));

  it('should do something', function () {
    expect(!!Marketing).toBe(true);
  });

});
