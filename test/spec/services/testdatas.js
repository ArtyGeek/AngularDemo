'use strict';

describe('Service: testdatas', function () {

  // load the service's module
  beforeEach(module('crudGridApp'));

  // instantiate service
  var testdatas;
  beforeEach(inject(function (_testdatas_) {
    testdatas = _testdatas_;
  }));

  it('should do something', function () {
    expect(!!testdatas).toBe(true);
  });

});
