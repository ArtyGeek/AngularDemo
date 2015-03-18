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
		'$http', '$q', function($http, $q) {
			this.getGridDataFormats = function () {
				var deffered = $q.defer();
				$http.get('/getGridDataFormats').
					success(function(data) {
						deffered.resolve(data);
					}).
					error(function() {
					});
				return deffered.promise;
			};

			this.getGridData = function () {
				var deffered = $q.defer();
				$http.get('/getGridData').
					success(function (data) {
						deffered.resolve(data);
					}).
					error(function () {
					});
				return deffered.promise;
			};
		}
	]);