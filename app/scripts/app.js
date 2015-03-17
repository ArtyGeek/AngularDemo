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
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
