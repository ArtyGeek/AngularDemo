'use strict';

describe('Directive: crudgrid', function () {

  // load the directive's module
  beforeEach(module('crudGridApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<crudgrid></crudgrid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the crudgrid directive');
  }));
});
