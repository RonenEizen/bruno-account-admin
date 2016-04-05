'use strict';

describe('Service: SettingsService', function () {

  // load the service's module
  beforeEach(module('accountAdminApp'));

  // instantiate service
  var Settings;
  beforeEach(inject(function (_Settings_) {
    Settings = _Settings_;
  }));

  it('should do something', function () {
    expect(!!Settings).toBe(true);
  });

});
