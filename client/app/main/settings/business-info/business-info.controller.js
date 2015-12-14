'use strict';

angular.module('userAdminApp')
  .controller('BusinessInfoCtrl', function($scope, $log, titlebarService, User, Auth) {
    // set page title
    $scope.pageTitle = titlebarService.setPageTitle('Business Info');
    $log.warn($scope.pageTitle);

    // form validation
    // business info
    $scope.businessMaster = {};
    $scope.business = {
      edit: false,
      name: "Sushi Place",
      email: "sushi@sushi.com",
      phone: "12345678910",
      addr1: "3000 Ocean Pkwy",
      addr2: "Suite 222",
      city: "Brooklyn",
      state: "NY",
      zip: 11223,
      country: "US"
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
        $scope.restaurant = {
          sameAsBusiness: true,
          edit: false,
          name: $scope.businessMaster.name,
          email: $scope.businessMaster.email,
          phone: $scope.businessMaster.phone,
          addr1: $scope.businessMaster.addr1,
          addr2: $scope.businessMaster.addr2,
          city: $scope.businessMaster.city,
          state: $scope.businessMaster.state,
          state: $scope.businessMaster.state,
          zip: $scope.businessMaster.zip,
          country: $scope.businessMaster.country
        }
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
    $scope.openingMaster = {};
    $scope.opening = {
      edit: false,
      timeFormat: "ampm",
      weekdays: [{
        name: "Monday",
        open: true,
        split: false,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: "",
        stop2: ""
      }, {
        name: "Tuesday",
        open: true,
        split: true,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: new Date(1970, 0, 1, 14, 57, 0),
        stop2: new Date(1970, 0, 1, 14, 57, 0)
      }, {
        name: "Wednesday",
        open: true,
        split: false,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: new Date(1970, 0, 1, 14, 57, 0),
        stop2: new Date(1970, 0, 1, 14, 57, 0)
      }, {
        name: "Thurday",
        open: false,
        split: false,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: "",
        stop2: ""
      }, {
        name: "Friday",
        open: false,
        split: false,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: "",
        stop2: ""
      }, {
        name: "Saturday",
        open: false,
        split: false,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: "",
        stop2: ""
      }, {
        name: "Sunday",
        open: false,
        split: false,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: "",
        stop2: ""
      }]
    };


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
        case 'opening':
          $scope.opening = angular.copy($scope.openingMaster);
          $scope.opening.edit = false;
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
        case 'opening':
          $scope.openingMaster = angular.copy($scope.opening);
          $scope.opening.edit = false;
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
