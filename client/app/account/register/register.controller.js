'use strict';

angular.module('accountAdminApp')
  .controller('RegisterCtrl', function ($window, $scope, Auth, $location, $http, $timeout) {
    $scope.user = {};
    $scope.errors = {};
    $scope.selected = undefined;
    var _service = new $window.google.maps.places.AutocompleteService();
    
    $scope.getPlaces = function(value) {
      var _predictions;
      _service.getPlacePredictions({
        input: value,
        types: ['establishment']
      }, function(predictions) {
        _predictions = predictions;
      });
      return $timeout(function() {
        if(_predictions) {
          return _predictions;
        }
      }, 100);
    };

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/register/owner');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

  });
