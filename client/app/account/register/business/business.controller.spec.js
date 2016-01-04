'use strict';

describe('Controller: BusinessCtrl', function () {

  // load the controller's module
  beforeEach(module('userAdminApp'));

  var BusinessCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessCtrl = $controller('BusinessCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
