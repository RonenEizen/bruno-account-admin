'use strict';

angular.module('userAdminApp')
  .controller('BusinessInfoCtrl', function($scope, User, Auth, $log) {
    // form validation
    // business info
    $scope.businessMaster = {};
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
    $scope.restaurantMaster = {};
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
      zip: "",
      country: ""
    };

    $scope.sameAsAbove = function() {
      if ($scope.restaurant.sameAsBusiness) {
        $scope.restaurant.sameAsBusiness = true;
        $scope.restaurant.edit = false;
        $scope.restaurant.name = $scope.businessMaster.name;
        $scope.restaurant.email = $scope.businessMaster.email;
        $scope.restaurant.phone = $scope.businessMaster.phone;
        $scope.restaurant.addr1 = $scope.businessMaster.addr1;
        $scope.restaurant.addr2 = $scope.businessMaster.addr2;
        $scope.restaurant.city = $scope.businessMaster.city;
        $scope.restaurant.state = $scope.businessMaster.state;
        $scope.restaurant.state = $scope.businessMaster.state;
        $scope.restaurant.zip = $scope.businessMaster.zip;
        $scope.restaurant.country = $scope.businessMaster.country;
      } else {
        $scope.restaurant = {};
      }
    };

    // business owner info
    $scope.ownerMaster = {};
    $scope.owner = {
      edit: false,
      fname: "",
      lname: "",
      bday: "",
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
      start2: "",
      stop2: ""
    }, {
      name: "Thurday",
      open: false,
      split: false,
      start1: "",
      stop1: "",
      start2: "",
      stop2: ""
    }, {
      name: "Friday",
      open: false,
      split: false,
      start1: "",
      stop1: "",
      start2: "",
      stop2: ""
    }, {
      name: "Saturday",
      open: false,
      split: false,
      start1: "",
      stop1: "",
      start2: "",
      stop2: ""
    }, {
      name: "Sunday",
      open: false,
      split: false,
      start1: "",
      stop1: "",
      start2: "",
      stop2: ""
    }];

    // saves & reset forms
    $scope.reset = function(section) {
      switch (section) {
        case 'business':
          $scope.business = angular.copy($scope.businessMaster);
          $scope.business.edit = false;
          break;
        case 'restaurant':
          $scope.restaurant = angular.copy($scope.restaurantMaster);
          $scope.restaurant.edit = false;
          break;
        case 'owner':
          $scope.owner = angular.copy($scope.ownerMaster);
          $scope.owner.edit = false;
          break;
      };
    };
    $scope.save = function(section) {
      switch (section) {
        case 'business':
          $scope.businessMaster = angular.copy($scope.business);
          $scope.business.edit = false;
          break;
        case 'restaurant':
          $scope.restaurantMaster = angular.copy($scope.restaurant);
          $scope.restaurant.edit = false;
          break;
        case 'owner':
          $scope.ownerMaster = angular.copy($scope.owner);
          $scope.owner.edit = false;
          break;
      };
    };



    // not sure where is this from
    $scope.errors = {};

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if (form.$valid) {
        Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
          .then(function() {
            $scope.message = 'Password successfully changed.';
          })
          .catch(function() {
            form.password.$setValidity('mongoose', false);
            $scope.errors.other = 'Incorrect password';
            $scope.message = '';
          });
      }
    };
  });
