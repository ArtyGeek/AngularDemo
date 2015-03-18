'use strict';

/**
 * @ngdoc service
 * @name crudGridApp.enums
 * @description
 * # enums
 * Service in the crudGridApp.
 */
angular.module('crudGridApp')
	.service('enums', [
		function() {
			this.DataTypes = {
				String: 0,
				Date: 1,
				Int: 2,
				Boolean: 3,
				PersistentEntity: 4
			};
		}
	]);