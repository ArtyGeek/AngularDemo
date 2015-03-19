'use strict';

/**
 * @ngdoc directive
 * @name crudGridApp.directive:crudgrid
 * @description
 * # crudgrid
 */
angular.module('crudGridApp')
	.directive('crudgrid', ['calculate',
		function (calculate) {
			return {
				templateUrl: '/views/crudgrid.html',
				restrict: 'E',
				scope: {
					formats: '=',
					gridData: '='
				},
				controller: function () {
				},
				link: function (scope) {
					scope.disableEdit = true;
					calculate.calculate(scope.gridData, scope.formats);
				}
			};
		}
	]);