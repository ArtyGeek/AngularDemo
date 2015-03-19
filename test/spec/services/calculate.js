'use strict';

describe('Service: calculate', function () {

  // load the service's module
  beforeEach(module('crudGridApp'));

  // instantiate service
  var calculate;
  beforeEach(inject(function (_calculate_) {
    calculate = _calculate_;
  }));

  it('should do something', function () {
    expect(!!calculate).toBe(true);
  });

});
