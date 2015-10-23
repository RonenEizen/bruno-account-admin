'use strict';

describe('Controller: CustomersCtrl', function () {

  // load the controller's module
  beforeEach(module('userAdminApp'));

  var CustomersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomersCtrl = $controller('CustomersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
