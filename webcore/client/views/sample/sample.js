'use strict';

angular.module('Mymean')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/sample', {
        templateUrl: 'views/sample/sample.html',
        controller: 'SampleCtrl',
        controllerAs: 'vm'
      });
  });
