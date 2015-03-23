'use strict';

/**
 * @ngdoc function
 * @name crudGridApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crudGridApp
 */
angular.module('crudGridApp')
	.controller('MainCtrl', ['$scope', 'getdata', function ($scope, getdata) {

		$scope.loadData = function () {
			getdata.getGridDataFormats().then(function (data) {
				$scope.dataFormats = data;
			});

			getdata.getGridData().then(function (data) {
				$scope.gridData = data;
			});
		};
	}]);