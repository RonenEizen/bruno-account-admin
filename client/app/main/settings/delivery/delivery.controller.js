'use strict';

angular.module('userAdminApp')
  .controller('SettingsDeliveryCtrl', function($scope, $log) {
    $scope.pageTitle = 'Delivery';
    $scope.enabled = true; // sets delivery enable

    $scope.requestsMaster = {};
    $scope.requests = {
      edit: false,
      email: {
        enabled: true,
        input: 'blabber@gmail.com'
      },
      phone: {
        enabled: false,
        input: '(555) 123-4567'
      }
    };

    $scope.additionalMaster = {};
    $scope.additional = {
      edit: false,
      minimun: {
        enabled: false,
        input: '12'
      },
      surcharge: {
        enabled: false,
        input: '5'
      },
      instructions: {
        enabled: false,
        input: 'should be delivered to the neighbor next door'
      }
    };

    // time table
    $scope.deliveryMaster = {};
    $scope.delivery = {
      edit: false,
      timeFormat: 'ampm',
      weekdays: [{
        name: 'Monday',
        open: true,
        split: false,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: '',
        stop2: ''
      }, {
        name: 'Tuesday',
        open: true,
        split: true,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: new Date(1970, 0, 1, 14, 57, 0),
        stop2: new Date(1970, 0, 1, 14, 57, 0)
      }, {
        name: 'Wednesday',
        open: true,
        split: false,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: new Date(1970, 0, 1, 14, 57, 0),
        stop2: new Date(1970, 0, 1, 14, 57, 0)
      }, {
        name: 'Thurday',
        open: false,
        split: false,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: '',
        stop2: ''
      }, {
        name: 'Friday',
        open: false,
        split: false,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: '',
        stop2: ''
      }, {
        name: 'Saturday',
        open: false,
        split: false,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: '',
        stop2: ''
      }, {
        name: 'Sunday',
        open: false,
        split: false,
        start1: new Date(1970, 0, 1, 14, 57, 0),
        stop1: new Date(1970, 0, 1, 14, 57, 0),
        start2: '',
        stop2: ''
      }]
    };

    // saves & reset forms
    $scope.reset = function(section) {
      switch (section) {
        case 'requests':
          $scope.requests = angular.copy($scope.requestsMaster);
          $scope.requests.edit = false;
          break;
        case 'delivery':
          $scope.delivery = angular.copy($scope.deliveryMaster);
          $scope.delivery.edit = false;
          break;
        case 'additional':
          $scope.additional = angular.copy($scope.additionalMaster);
          $scope.additional.edit = false;
          break;
      }
    };
    $scope.save = function(section) {
      switch (section) {
        case 'requests':
          $scope.requestsMaster = angular.copy($scope.requests);
          $scope.requests.edit = false;
          break;
        case 'delivery':
          $scope.deliveryMaster = angular.copy($scope.delivery);
          $scope.delivery.edit = false;
          $log.log($scope.deliveryMaster);
          break;
        case 'additional':
          $scope.additionalMaster = angular.copy($scope.additional);
          $scope.additional.edit = false;
          break;
      }
    };
  });
