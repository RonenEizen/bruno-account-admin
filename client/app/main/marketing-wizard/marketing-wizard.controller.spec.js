'use strict';

describe('Controller: MarketingWizardCtrl', function () {

  // load the controller's module
  beforeEach(module('userAdminApp'));

  var MarketingWizardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarketingWizardCtrl = $controller('MarketingWizardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
