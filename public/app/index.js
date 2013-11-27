'use strict';

// Create App Module
angular.module('SomeApp', ['ngRoute', 'SomeModule'])
  .config(function ($routeProvider) {
    // Router
    $routeProvider
      .when('/', {
        templateUrl: 'app/index.html',
        controller: 'IndexCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  // Main view controller
  .controller('IndexCtrl', ['$scope', function($scope){
    $scope.thing = 'Woah!';

    $scope.sayHi = function(){
      console.log('sup dog!');
    }
  }]);
