'use strict';

describe('Service: CampaignService', function () {

  // load the service's module
  beforeEach(module('accountAdminApp'));

  // instantiate service
  var Campaign;
  beforeEach(inject(function (_Campaign_) {
    Campaign = _Campaign_;
  }));

  it('should do something', function () {
    expect(!!Campaign).toBe(true);
  });

});
