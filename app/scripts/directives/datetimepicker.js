'use strict';

/**
 * @ngdoc directive
 * @name crudGridApp.directive:datetimepicker
 * @description
 * # datetimepicker
 */
angular.module('crudGridApp')
	.directive('datetimepicker', [
		'$timeout', function ($timeout) {
			return {
				restrict: 'A',
				scope: {
					datetimepicker: '='
				},
				link: function(scope, element) {
					$timeout(function () {

						element.datetimepicker({
							value: new Date(scope.datetimepicker),
							format: 'Y/m/d H:i'
						});
					});
				}
			};
		}
	]);