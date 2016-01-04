'use strict';

angular.module('userAdminApp')
  .controller('BusinessCtrl', function ($scope, $timeout) {
    $scope.selected = undefined;
	  var service = new google.maps.places.AutocompleteService();
	  $scope.getPlaces = function(value) {
	    var places = undefined;
	    service.getPlacePredictions({
	      input: value,
	      types: ['establishment']
	    }, function(predictions, status) {
	      places = predictions;
	    });
	    return $timeout(function() {
	      if(places) {
	        return places;
	      }
	    }, 100);
  	}
	});