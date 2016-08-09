'use strict'

angular.module('accountAdminApp')
  .controller('SettingsBusinessInfoCtrl', function($scope, BusinessInfoService) {
    const SERVICE = BusinessInfoService

    $scope.pageTitle = 'General Business Info'

    $scope.business = SERVICE.businessInfo.business
    $scope.restaurant = SERVICE.businessInfo.restaurant
    $scope.owner = SERVICE.businessInfo.owner
    $scope.opening = SERVICE.businessInfo.opening

    $scope.hideBusiness = _.isEmpty($scope.business)
    $scope.hideRestaurant = _.isEmpty($scope.restaurant)
    $scope.hideOwner = _.isEmpty($scope.owner)
  })
