'use strict';

describe('Controller: MarketingCtrl', function () {

  // load the controller's module
  beforeEach(module('userAdminApp'));

  var MarketingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarketingCtrl = $controller('MarketingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
