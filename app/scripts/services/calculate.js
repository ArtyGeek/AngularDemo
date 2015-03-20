'use strict';

/**
 * @ngdoc service
 * @name crudGridApp.calculate
 * @description
 * # calculate
 * Service in the crudGridApp.
 */
angular.module('crudGridApp')
	.service('calculate', function () {
		this.calculate = function (gridData, formats) {

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

		this.prepareNewRow = function (data, formats) {
			console.log(data);
			//console.log(formats);

			var newObject = '{';
			for (var i in formats) {
				//if (!formats[i].hasOwnProperty('Calculate')) {
					switch (formats[i].DataType) {
						case 0:
							{
								newObject += '\"' + formats[i].Name + '\"' + ':\"\",';
								break;
							}
						case 1:
							{
								newObject += '\"' + formats[i].Name + '\"' + ':\"\",';
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
								newObject += '\"' + formats[i].Name + '\"' + ':[],';
								break;
							}
					}
				//}
			}

			newObject = newObject.substring(0, newObject.length - 1);
			newObject += '}';

			console.log(window.angular.fromJson(newObject));


			//console.log(newObject);
			//var test1 = '{"Name":"aaa", "BirthDate":"asd", "Show": false}';
			//console.log(window.angular.fromJson(test1));


			//var test2 = "{\"Name\":\"\", \"BirthDate\":\"\", \"Show\":false}";
			//console.log(window.angular.fromJson(test2));

		};
	});