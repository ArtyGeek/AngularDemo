'use strict';

/**
 * @ngdoc overview
 * @name crudGridApp
 * @description
 * # crudGridApp
 *
 * Main module of the application.
 */
angular
	.module('crudGridApp', [
		'ngRoute',
		'ngMockE2E'
	])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.run(function($httpBackend, testdatas) {
		$httpBackend.whenGET('views/main.html').passThrough();
		$httpBackend.whenGET('/views/crudgrid.html').passThrough();
		$httpBackend.whenGET('/getGridDataFormats').respond(testdatas.dataFormats);
		$httpBackend.whenGET('/getGridData').respond(testdatas.data);
	});