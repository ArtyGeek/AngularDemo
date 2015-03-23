'use strict';

/**
 * @ngdoc service
 * @name crudGridApp.calculate
 * @description
 * # calculate
 * Service in the crudGridApp.
 */
angular.module('crudGridApp')
	.service('calculate', [function () {
		this.calculate = function (gridData, formats) {
			for (var i = 0; i < gridData.length; i++) {
				for (var j = 0; j < formats.length; j++) {
					if (formats[j].hasOwnProperty('Calculate')) {
						var gridItem = gridData[i];
						var calculate = formats[j];
						var calculateFrom = calculate.CalculateFrom;

						calculate.disabled = true;

						var functionParametrs = '';
						var data = [];
						for (var l = 0; l < calculateFrom.length; l++) {
							functionParametrs += (l != calculateFrom.length - 1) ? calculateFrom[l] + ',' : calculateFrom[l];
							data.push(gridItem[calculateFrom[l]]);
						}
						var calcFunction = new Function(functionParametrs, calculate.Calculate);
						gridItem[calculate.Name] = calcFunction.apply(window, data);
					}
				}
			}
		};

		this.calculateOne = function (gridItem, formats) {
			for (var j = 0; j < formats.length; j++) {
				if (formats[j].hasOwnProperty('Calculate')) {
					var calculate = formats[j];
					var calculateFrom = calculate.CalculateFrom;

					calculate.disabled = true;

					var functionParametrs = '';
					var data = [];
					for (var l = 0; l < calculateFrom.length; l++) {
						functionParametrs += (l != calculateFrom.length - 1) ? calculateFrom[l] + ',' : calculateFrom[l];
						data.push(window.moment(gridItem[calculateFrom[l]], 'L LT')._d);
					}

					var calcFunction = new Function(functionParametrs, calculate.Calculate);
					gridItem[calculate.Name] = calcFunction.apply(window, data);
				}
			}
			return gridItem;
		};

		this.prepareNewRow = function (formats) {
			var newObject = '{';
			for (var i = 0; i < formats.length; i++) {
				switch (formats[i].DataType) {
					case 0:
						{
							newObject += '\"' + formats[i].Name + '\"' + ':\"\",';
							break;
						}
					case 1:
						{
							newObject += '\"' + formats[i].Name + '\"' + ':\"' + window.moment(new Date()).format() + '\",';
							break;
						}
					case 2:
						{
							newObject += '\"' + formats[i].Name + '\"' + ':0,';
							break;
						}
					case 3:
						{
							newObject += '\"' + formats[i].Name + '\"' + ':false,';
							break;
						}
					case 4:
						{
							newObject += '\"' + formats[i].Name + '\"' + ':0,';
							break;
						}
				}
			}

			newObject = newObject.substring(0, newObject.length - 1);
			newObject += '}';

			return window.angular.fromJson(newObject);
		};
	}]);