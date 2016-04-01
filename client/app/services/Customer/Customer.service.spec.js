'use strict';

describe('Service: CustomersService', function () {

  // load the service's module
  beforeEach(module('accountAdminApp'));

  // instantiate service
  var CustomersService;
  beforeEach(inject(function (_CustomersService_) {
    CustomersService = _CustomersService_;
  }));

  it('should do something', function () {
    expect(!!CustomersService).toBe(true);
  });

});
