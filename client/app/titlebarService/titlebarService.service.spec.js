'use strict';

describe('Service: titlebarService', function () {

  // load the service's module
  beforeEach(module('userAdminApp'));

  // instantiate service
  var titlebarService;
  beforeEach(inject(function (_titlebarService_) {
    titlebarService = _titlebarService_;
  }));

  it('should do something', function () {
    expect(!!titlebarService).toBe(true);
  });

});
