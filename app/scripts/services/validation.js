'use strict';

/**
 * @ngdoc service
 * @name crudGridApp.validation
 * @description
 * # validation
 * Service in the crudGridApp.
 */
angular.module('crudGridApp')
	.service('validation', function () {
		this.validate = function (item, format) {
			var result = 0;
			var requiredFields = 0;
			for (var i = 0; i < format.length; i++) {
				if (format[i].IsRequired === true) {
					var propertyName = format[i].Name;
					var dataType = format[i].DataType;
					requiredFields++;

					if (item[propertyName] && item !== '')
						if (dataType === 1) {
							if (!this.dateTimeValidate(item[propertyName])) {
								item[propertyName] = '';
							} else {
								result++;
							}
						} else {
							result++;
						}
				}
			}

			return result === requiredFields;
		};

		this.dateTimeValidate = function (date) {
			return window.moment(date).isValid();
		};
	});