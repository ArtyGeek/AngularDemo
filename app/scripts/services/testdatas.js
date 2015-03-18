'use strict';

/**
 * @ngdoc service
 * @name crudGridApp.testdatas
 * @description
 * # testdatas
 * Service in the crudGridApp.
 */
angular.module('crudGridApp')
	.service('testdatas', [
		'enums', function (enums) {
			this.dataFormats = [
				{
					Name: 'Name',
					DataType: enums.DataTypes.String,
					IsRequired: true
				},
				{
					Name: 'BirthDate',
					DataType: enums.DataTypes.Date,
					IsRequired: false
				},
				{
					Name: 'Show',
					DataType: enums.DataTypes.Boolean,
					IsRequired: false
				},
				{
					Name: 'Country',
					DataType: enums.DataTypes.PersistentEntity,
					IsRequired: false
				},
				{
					Name: 'Age',
					DataType: enums.DataTypes.Int,
					IsRequired: false,
					CalculateFrom: ['BirthDate'],
					Calculate: function() {
					}
				}
			];

			this.data = [
				{
					Name: 'Name1',
					BirthDate: new Date('01/01/2000'),
					Show: true,
					Country: [
					{
						id: 1,
						text: 'Ukrain'
					},
					{
						id: 2,
						text: 'Polish'
					}],
					Age: 22
				},
				{
					Name: 'Name2',
					BirthDate: new Date('01/01/2000'),
					Show: false,
					Country: [
					{
						id: 1,
						text: 'German'
					},
					{
						id: 2,
						text: 'Scottish'
					}],
					Age: 22
				},
				{
					Name: 'Name3',
					BirthDate: new Date('01/01/2000'),
					Show: true,
					Country: [
					{
						id: 1,
						text: 'France'
					},
					{
						id: 2,
						text: 'Italy'
					}],
					Age: 22
				}
			];
		}
	]);