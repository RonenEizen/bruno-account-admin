'use strict';

describe('Controller: SiteBuilderCtrl', function () {

  // load the controller's module
  beforeEach(module('userAdminApp'));

  var SiteBuilderCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SiteBuilderCtrl = $controller('SiteBuilderCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
