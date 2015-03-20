'use strict';

/**
 * @ngdoc service
 * @name crudGridApp.postdata
 * @description
 * # postdata
 * Service in the crudGridApp.
 */
angular.module('crudGridApp')
	.service('postdata', [function() {
		this.save = function (data) {
			localStorage.setItem('gridData', window.angular.toJson(data));
		};
	}]);