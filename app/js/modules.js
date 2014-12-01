'use strict';
angular.module('customServices', []).factory('time', function()
{
	var time = {};
	time.today = new Date();
	return time;
});