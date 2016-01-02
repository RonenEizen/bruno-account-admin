'use strict';

angular.module('userAdminApp')
  .controller('RegisterCtrl', function ($scope, Auth, $location, $http) {
    $scope.user = {};
    $scope.errors = {};



    $scope.getPlaces = function(val) {
      $http.jsonp('https://maps.googleapis.com/maps/api/place/autocomplete/json?callback=JSON_CALLBACK&key=AIzaSyD9lsOgEk9lzW-AiQiKjgGIjwbM_ZFd1rA&radius=10000&input='+val)
        .success(function(response){
          console.log(response);
        });
      };

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
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
