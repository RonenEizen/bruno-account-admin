'use strict';

describe('Directive: tagList', function () {

  // load the directive's module
  beforeEach(module('accountAdminApp'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tag-list></tag-list>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the tagList directive');
  }));
});
