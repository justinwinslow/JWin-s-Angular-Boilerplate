'use strict';

// Create App Selection module
angular.module('SomeModule', [])
  // Controller for module
  .controller('SomeModuleCtrl', function($scope) {
    $scope.user = {
      name: 'Justin'
    };
  })
  // Create view
  .directive('someModuleView', function(){
    return {
      // I wish there was a way to make this path relative
      templateUrl: 'app/modules/someModule/template.html'
    };
  });
