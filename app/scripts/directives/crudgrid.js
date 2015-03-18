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
			scope: {
				formats: '=',
				gridData: '='
			},
			link: function (scope) {
				scope.disableEdit = true;
			}
		};
	});