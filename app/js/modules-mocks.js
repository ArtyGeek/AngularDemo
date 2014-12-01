'use strict';
// Include mocks only if parent frame with angular.scenario (e2e tests) or if jasmine (unit tests) defined
if ((parent && parent.angular.scenario) || jasmine)
{
	angular.module('customServices', []).factory('time', function ()
	{
		var time = {};
		time.today = new Date(2000, 0, 1);
		return time;
	});
}