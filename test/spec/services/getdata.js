'use strict';

describe('Service: getdata', function () {

  // load the service's module
  beforeEach(module('crudGridApp'));

  // instantiate service
  var getdata;
  beforeEach(inject(function (_getdata_) {
    getdata = _getdata_;
  }));

  it('should do something', function () {
    expect(!!getdata).toBe(true);
  });

});
