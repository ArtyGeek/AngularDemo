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
				link: function (scope, element) {
					$timeout(function () {

						//re-define 2 methods for using moment
						Date.parseDate = function (input, format) {
							return window.moment(input, format).toDate();
						};
						Date.prototype.dateFormat = function (format) {
							return window.moment(this).format(format);
						};
						//************************************

						//initialize datetimepicker
						element.datetimepicker({
							value: window.moment(scope.datetimepicker).format('L LT'),
							format: 'L LT',
							formatTime: 'LT',
							formatDate: 'L'
						});
					});
				}
			};
		}
	]);