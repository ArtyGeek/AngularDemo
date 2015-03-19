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
					Calculate: 'return (Date.now() - BirthDate) / (1000 * 60 * 60 * 24 * 365);'
				}
			];

			this.data = [
				{
					Name: 'Name1',
					BirthDate: new Date('11/23/1986'),
					Show: true,
					Country: [
					{
						id: 1,
						text: 'Ukraine'
					},
					{
						id: 2,
						text: 'Polish'
					}],
					Age: 22
				},
				{
					Name: 'Name2',
					BirthDate: new Date('12/03/2000'),
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
					BirthDate: new Date('07/01/2000'),
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