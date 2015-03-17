'use strict';

/**
 * @ngdoc function
 * @name crudGridApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crudGridApp
 */
angular.module('crudGridApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
