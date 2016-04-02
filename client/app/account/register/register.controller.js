'use strict';

class RegisterController {
  constructor($window, Auth, $timeout) {
    this.user = {};
    this.errors = {};
    this.selected = undefined;
    this.gMaps = new $window.google.maps();
    this.timeout = $timeout;
    this.Auth = Auth;
  }

  getPlaces(value) {
    var _predictions;
    var _service = new this.gMaps.places.AutocompleteService();
    _service.getPlacePredictions({
      input: value,
      types: ['establishment']
    }, function(predictions) {
      _predictions = predictions;
    });
    return this.timeout(function() {
      if(_predictions) {
        return _predictions;
      }
    }, 100);
  }

  register(form) {
    if(form.$valid) {
      this.submitted = true;
      this.Auth.createUser({
        email: this.user.email,
        password: this.user.password
      })
      .then( function() {
        // Account created, redirect to home
        this.location.path('/register/owner');
      })
      .catch( function(err) {
        err = err.data;
        this.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, function(error, field) {
          form[field].$setValidity('mongoose', false);
          this.errors[field] = error.message;
        });
      });
    }
  }
}

angular.module('accountAdminApp')
  .controller('RegisterCtrl', RegisterController);
