'use strict';

/**
 * @ngdoc directive
 * @name crudGridApp.directive:crudgrid
 * @description
 * # crudgrid
 */
angular.module('crudGridApp')
	.directive('crudgrid', function () {
		return {
			templateUrl: '/views/crudgrid.html',
			restrict: 'E',
			link: function (scope, element, attrs) {
				scope.disableEdit = true;
			}
		};
	});