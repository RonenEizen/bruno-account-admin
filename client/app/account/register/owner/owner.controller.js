'use strict';

angular.module('accountAdminApp')
  .controller('OwnerCtrl', function ($scope,$location) {
  	$scope.updateOwner = function() {
  		$location.path('/register/business');
  	};
  });