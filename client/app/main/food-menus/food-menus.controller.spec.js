'use strict';

describe('Controller: FoodMenusCtrl', function () {

  // load the controller's module
  beforeEach(module('accountAdminApp'));

  var FoodMenusCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoodMenusCtrl = $controller('FoodMenusCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
