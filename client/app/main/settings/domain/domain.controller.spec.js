'use strict';

describe('Controller: DomainCtrl', function () {

  // load the controller's module
  beforeEach(module('userAdminApp'));

  var DomainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DomainCtrl = $controller('DomainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
