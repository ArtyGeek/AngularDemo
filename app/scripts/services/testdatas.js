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
					IsRequired: true
				},
				{
					Name: 'Show',
					DataType: enums.DataTypes.Boolean,
					IsRequired: false
				},
				{
					Name: 'Country',
					DataType: enums.DataTypes.PersistentEntity,
					IsRequired: false,
					Data: [
					{
						id: 1,
						text: 'Ukraine'
					},
					{
						id: 2,
						text: 'Poland'
					},
					{
						id: 3,
						text: 'Germany'
					},
					{
						id: 4,
						text: 'Sweden'
					},
					{
						id: 5,
						text: 'France'
					},
					{
						id: 6,
						text: 'Italy'
					}]
				},
				{
					Name: 'Age',
					DataType: enums.DataTypes.Int,
					IsRequired: false,
					CalculateFrom: ['BirthDate'],
					Calculate: 'var birthDate = new Date(BirthDate); ' +
						'var age = (Date.now() - birthDate) / (1000 * 60 * 60 * 24 * 365);' +
						'return parseFloat(age.toFixed(2));'
				}
			];

			this.data = [
				{
					Name: 'Name1',
					BirthDate: '1986-11-22T22:00:00.000Z',
					Show: true,
					Country: 2
				},
				{
					Name: 'Name2',
					BirthDate: '1992-06-22T22:00:00.000Z',
					Show: false,
					Country: 1
				},
				{
					Name: 'Name3',
					BirthDate: '1985-10-22T22:00:00.000Z',
					Show: true,
					Country: 3
				}
			];
		}
	]);