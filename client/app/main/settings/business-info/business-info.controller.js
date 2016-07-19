'use strict';

angular.module('accountAdminApp')
  .controller('SettingsBusinessInfoCtrl', function($scope, SettingsService, Modal) {
    $scope.pageTitle = 'General Business Info';

    $scope.business = SettingsService.businessInfo.business;
    $scope.restaurant = SettingsService.businessInfo.restaurant;
    $scope.owner = SettingsService.businessInfo.owner;
    $scope.opening = SettingsService.businessInfo.openingHours;

    // Modal calls
    $scope.businessModal = Modal.businessModal;
    $scope.openingModal = Modal.openingModal;
    $scope.ownerModal = Modal.ownerModal;
    $scope.restaurantModal = Modal.restaurantModal;

    $scope.hideBusiness = _.isEmpty($scope.business);
    $scope.hideRestaurant = _.isEmpty($scope.restaurant);
    $scope.hideOwner = _.isEmpty($scope.owner);
  });
