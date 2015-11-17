'use strict';

angular.module('userAdminApp')
  .controller('BusinessInfoCtrl', function ($scope, User, Auth) {
    // form validation
    // business info
    $scope.business = {
      edit: false,
      name: "",
      email: "",
      phone: "",
      addr1: "",
      addr2: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    };

    // restaurant info
    $scope.restaurant = {
      sameAsBusiness: false,
      edit: false,
      name: "",
      email: "",
      phone: "",
      addr1: "",
      addr2: "",
      city: "",
      state: "",
      state: "",
      zip: "",
      country: ""
    };

    $scope.sameAsAbove = function () {
      if ($scope.restaurant.sameAsBusiness) {
        $scope.restaurant.edit = false;
        $scope.restaurant.name = $scope.business.name;
        $scope.restaurant.email = $scope.business.email;
        $scope.restaurant.phone = $scope.business.phone;
        $scope.restaurant.addr1 = $scope.business.addr1;
        $scope.restaurant.addr2 = $scope.business.addr2;
        $scope.restaurant.city = $scope.business.city;
        $scope.restaurant.state = $scope.business.state;
        $scope.restaurant.state = $scope.business.state;
        $scope.restaurant.zip = $scope.business.zip;
        $scope.restaurant.country = $scope.business.country;
      } else { $scope.restaurant = {} }
    }

    // business owner info
    $scope.owner = {
      edit: false,
      fname: "",
      lname: "",
      birthday: "",
      ssn: "",
      email: "",
      phone: "",
      addr1: "",
      addr2: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    };

    // opening hours
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

    // validates forms
    $scope.submitForm = function(isValid) {
      if (isValid)
        alert('yeap, you passed it');
    };



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
