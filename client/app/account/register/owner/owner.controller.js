'use strict';

angular.module('userAdminApp')
  .controller('OwnerCtrl', function ($scope, $location) {
  	$scope.updateOwner = function(form) {
  		$location.path('/register/business');
  	}
    
  });
