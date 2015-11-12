'use strict';

angular.module('userAdminApp')
  .controller('BusinessInfoCtrl', function ($scope, User, Auth) {
    // time table
    $scope.timeFormat = "ampm";
    $scope.weekdays = [{
      name: "Monday",
      open: true,
      split: false,
      start1: "09:00:00",
      stop1: "18:00:00",
      start2: "",
      stop2: ""
    }, {
      name: "Tuesday",
      open: true,
      split: true,
      start1: "09:00:00",
      stop1: "12:00:00",
      start2: "13:00:00",
      stop2: "18:00:00"
    }, {
      name: "Wednesday",
      open: true,
      split: false,
      start1: "09:00:00",
      stop1: "12:00:00",
      start2: "13:00:00",
      stop2: "18:00:00"
    }, {
      name: "Thurday",
      open: false,
      split: false,
      start1: "09:00:00",
      stop1: "18:00:00",
      start2: "",
      stop2: ""
    }, {
      name: "Friday",
      open: false,
      split: false,
      start1: "09:00:00",
      stop1: "18:00:00",
      start2: "",
      stop2: ""
    }, {
      name: "Saturday",
      open: false,
      split: false,
      start1: "09:00:00",
      stop1: "18:00:00",
      start2: "",
      stop2: ""
    }, {
      name: "Sunday",
      open: false,
      split: false,
      start1: "09:00:00",
      stop1: "18:00:00",
      start2: "",
      stop2: ""
    }];




    // not sure where is this from
    $scope.errors = {};

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};
  });
