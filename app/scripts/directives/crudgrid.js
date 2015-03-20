'use strict';

/**
 * @ngdoc directive
 * @name crudGridApp.directive:crudgrid
 * @description
 * # crudgrid
 */
angular.module('crudGridApp')
	.directive('crudgrid', ['calculate', 'postdata',
		function (calculate, postdata) {
			return {
				templateUrl: '/views/crudgrid.html',
				restrict: 'E',
				scope: {
					formats: '=',
					gridData: '='
				},
				controller: function ($scope) {
					var deleteIndex = '';

					$scope.showDeletePopup = function (index) {
						$scope.confirmDeletePopup = true;
						deleteIndex = index;
					};

					$scope.confirmDelete = function (action) {
						if (action === 'Yes') {
							$scope.gridData.splice(deleteIndex, 1);
							postdata.save($scope.gridData);
						}
						$scope.confirmDeletePopup = false;
					};

					$scope.addNewRow = function () {
						calculate.prepareNewRow($scope.gridData[0], $scope.formats);
						//$scope.gridData.push();
					};
				},
				link: function (scope) {
					scope.disableEdit = true;
					calculate.calculate(scope.gridData, scope.formats);
				}
			};
		}
	]);