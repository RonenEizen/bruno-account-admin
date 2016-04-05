'use strict';

angular.module('accountAdminApp')
  .controller('SettingsBusinessInfoCtrl', function($scope, Auth) {
    $scope.pageTitle = 'General Business Info';

    $scope.business = $scope.main.businessInfo.business;
    $scope.restaurant = $scope.main.businessInfo.restaurant;
    $scope.owner = $scope.main.businessInfo.owner;
    $scope.opening = $scope.main.businessInfo.openingHours;

    // $scope.sameAsAbove = function() {
    //   if ($scope.restaurant.sameAsBusiness) {
    //     $scope.restaurant = {
    //       sameAsBusiness: true,
    //       edit: false,
    //       name: $scope.businessMaster.name,
    //       email: $scope.businessMaster.email,
    //       phone: $scope.businessMaster.phone,
    //       addr1: $scope.businessMaster.addr1,
    //       addr2: $scope.businessMaster.addr2,
    //       city: $scope.businessMaster.city,
    //       state: $scope.businessMaster.state,
    //       zip: $scope.businessMaster.zip,
    //       country: $scope.businessMaster.country
    //     };
    //   } else {
    //     $scope.restaurant = {};
    //   }
    // };

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
