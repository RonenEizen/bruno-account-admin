'use strict';

describe('Controller: UsersAndRolesCtrl', function () {

  // load the controller's module
  beforeEach(module('userAdminApp'));

  var UsersAndRolesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsersAndRolesCtrl = $controller('UsersAndRolesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
