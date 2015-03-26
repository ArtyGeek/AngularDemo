'use strict';

/**
 * @ngdoc directive
 * @name crudGridApp.directive:crudgrid
 * @description
 * # crudgrid
 */
angular.module('crudGridApp')
	.directive('crudgrid', ['calculate', 'postdata', 'validation',
		function (calculate, postdata, validation) {
			return {
				templateUrl: '/views/crudgrid.html',
				restrict: 'E',
				scope: {
					formats: '=',
					gridData: '='
				},
				controller: function ($scope) {
					var editRow = false;
					var editRowIndex;
					var elemetCopy;

					$scope.editRow = function (index) {
						if (editRow) { return; }
						elemetCopy = window.angular.copy($scope.gridData[index]);
						$scope.gridData[index].allowEdit = true;
						editRow = true;
						editRowIndex = index;
					};

					$scope.cancelEdit = function () {
						if (editRowIndex === $scope.gridData.length) {		//add new row canceled
							$scope.gridData.pop();
						} else {
							$scope.gridData[editRowIndex].allowEdit = false;
							$scope.gridData[editRowIndex] = elemetCopy;
						}
						editRow = false;
					};

					$scope.deleteRow = function (index) {
						if (editRow) { return; }
						$scope.deleteRowIndex = index;
						$('#confirmPopup').modal();
					};

					$scope.confirmDelete = function (deleteIndex) {
						$scope.gridData.splice(deleteIndex, 1);
						postdata.save($scope.gridData);
					};

					$scope.addNewRow = function () {
						if (editRow) { return; }
						editRow = true;
						var index = $scope.gridData.push(calculate.prepareNewRow($scope.formats));
						$scope.gridData[index - 1].allowEdit = true;
						editRowIndex = $scope.gridData.length;
					};

					$scope.dateChange = function (rowIndex) {
						$scope.gridData[rowIndex] = calculate.calculateOne($scope.gridData[rowIndex], $scope.formats);
					};

					$scope.saveData = function (index) {
						if (!validation.validate($scope.gridData[index], $scope.formats)) { return; }
						editRow = false;
						$scope.gridData[index].allowEdit = false;
						postdata.save($scope.gridData);
					};
				},
				link: function (scope) {
					calculate.calculate(scope.gridData, scope.formats);
				}
			};
		}
	]);