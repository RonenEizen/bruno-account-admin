'use strict';

angular.module('accountAdminApp')
  .controller('SettingsBusinessInfoCtrl', function($scope, SettingsService) {
    $scope.pageTitle = 'General Business Info';

    $scope.business = SettingsService.businessInfo.business;
    $scope.restaurant = SettingsService.businessInfo.restaurant;
    $scope.owner = SettingsService.businessInfo.owner;
    $scope.opening = SettingsService.businessInfo.openingHours;

    $scope.hideBusiness = _.isEmpty($scope.business);
    $scope.hideRestaurant = _.isEmpty($scope.restaurant);
    $scope.hideOwner = _.isEmpty($scope.owner);
  });
