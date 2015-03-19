'use strict';

describe('Service: datetimepicker', function () {

  // load the service's module
  beforeEach(module('crudGridApp'));

  // instantiate service
  var datetimepicker;
  beforeEach(inject(function (_datetimepicker_) {
    datetimepicker = _datetimepicker_;
  }));

  it('should do something', function () {
    expect(!!datetimepicker).toBe(true);
  });

});
