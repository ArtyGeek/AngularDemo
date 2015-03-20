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
					Calculate: 'var birthDate = new Date(BirthDate); return (Date.now() - birthDate) / (1000 * 60 * 60 * 24 * 365);'
				}
			];

			this.data = [
				{
					Name: 'Name1',
					BirthDate: '1986-11-22T22:00:00.000Z',
					Show: true,
					Country: [
					{
						id: 1,
						text: 'Ukraine'
					},
					{
						id: 2,
						text: 'Polish',
						selected: true
					},
					{
						id: 3,
						text: 'Germany'
					},
					{
						id: 4,
						text: 'Scottish'
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
					Name: 'Name2',
					BirthDate: '1992-06-22T22:00:00.000Z',
					Show: false,
					Country: [
					{
						id: 1,
						text: 'Ukraine'
					},
					{
						id: 2,
						text: 'Polish'
					},
					{
						id: 3,
						text: 'Germany',
						selected: true
					},
					{
						id: 4,
						text: 'Scottish'
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
					Name: 'Name3',
					BirthDate: '1985-10-22T22:00:00.000Z',
					Show: true,
					Country: [
					{
						id: 1,
						text: 'Ukraine',
						selected: true
					},
					{
						id: 2,
						text: 'Polish'
					},
					{
						id: 3,
						text: 'Germany'
					},
					{
						id: 4,
						text: 'Scottish'
					},
					{
						id: 5,
						text: 'France'
					},
					{
						id: 6,
						text: 'Italy'
					}]
				}
			];
		}
	]);