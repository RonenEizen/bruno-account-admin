'use strict';

describe('Controller: OwnerCtrl', function () {

  // load the controller's module
  beforeEach(module('accountAdminApp'));

  var OwnerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OwnerCtrl = $controller('OwnerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
