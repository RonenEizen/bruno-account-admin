'use strict';

describe('Service: MenuService', function () {

  // load the service's module
  beforeEach(module('accountAdminApp'));

  // instantiate service
  var Menu;
  beforeEach(inject(function (_Menu_) {
    Menu = _Menu_;
  }));

  it('should do something', function () {
    expect(!!Menu).toBe(true);
  });

});
