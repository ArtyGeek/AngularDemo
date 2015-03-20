'use strict';

/**
 * @ngdoc service
 * @name crudGridApp.getdata
 * @description
 * # getdata
 * Service in the crudGridApp.
 */
angular.module('crudGridApp')
	.service('getdata', [
		'$http', '$q', function ($http, $q) {
			this.getGridDataFormats = function () {
				var deffered = $q.defer();

				var dataFormats = window.angular.fromJson(localStorage.getItem('dataFormats', 0));
				if (dataFormats === null || dataFormats === undefined) {
					$http.get('/getGridDataFormats').
						success(function (data) {
							deffered.resolve(data);
							localStorage.setItem('dataFormats', window.angular.toJson(data));
						}).
						error(function () {
						});
				} else {
					deffered.resolve(dataFormats);
				}
				return deffered.promise;
			};

			this.getGridData = function () {
				var deffered = $q.defer();

				var gridData = window.angular.fromJson(localStorage.getItem('gridData', 0));
				if (gridData === null || gridData === undefined) {
					$http.get('/getGridData').
						success(function(data) {
							deffered.resolve(data);
							localStorage.setItem('gridData', window.angular.toJson(data));
						}).
						error(function() {
						});
				} else {
					deffered.resolve(gridData);
				}
				return deffered.promise;
			};
		}
	]);