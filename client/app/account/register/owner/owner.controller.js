'use strict';

angular.module('userAdminApp')
  .controller('OwnerCtrl', function ($scope,$location) {
  	$scope.updateOwner = function() {
  		$location.path('/register/business');
  	};
  });