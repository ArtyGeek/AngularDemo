'use strict';

/**
 * @ngdoc service
 * @name crudGridApp.calculate
 * @description
 * # calculate
 * Service in the crudGridApp.
 */
angular.module('crudGridApp')
	.service('calculate', function() {
		this.calculate = function(gridData, formats) {

			for (var i in gridData) {
				for (var j in formats) {
					if (formats[j].hasOwnProperty('Calculate')) {
						var gridItem = gridData[i];
						var calculate = formats[j];
						var calculateFrom = calculate.CalculateFrom;

						calculate.disabled = true;

						var functionParametrs = '';
						var data = [];
						for (var l in calculateFrom) {
							functionParametrs += (l != calculateFrom.length - 1) ? calculateFrom[l] + ',' : calculateFrom[l];
							data.push(gridItem[calculateFrom[l]]);
						}
						var calcFunction = new Function(functionParametrs, calculate.Calculate);
						gridItem[calculate.Name] = calcFunction.apply(window, data);
					}
				}
			}
		};
	});
