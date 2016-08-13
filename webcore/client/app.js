'use strict';

angular.module('Mymean', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });

  

