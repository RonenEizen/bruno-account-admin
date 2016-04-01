'use strict';

describe('Service: DefaultsService', function () {

  // load the service's module
  beforeEach(module('accountAdminApp'));

  // instantiate service
  var Default;
  beforeEach(inject(function (_Default_) {
    Default = _Default_;
  }));

  it('should do something', function () {
    expect(!!Default).toBe(true);
  });

});
