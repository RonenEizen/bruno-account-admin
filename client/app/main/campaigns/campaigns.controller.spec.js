'use strict';

describe('Controller: CampaignsCtrl', function () {

  // load the controller's module
  beforeEach(module('userAdminApp'));

  var CampaignsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CampaignsCtrl = $controller('CampaignsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
