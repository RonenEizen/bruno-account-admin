'use strict';

angular.module('userAdminApp')
  .controller('DeliveryCtrl', function ($scope) {
    $scope.enabled = true; // sets delivery enable

    $scope.requestsMaster = {};
    $scope.requests = {
      edit: false,
      email: {
        enabled: true,
        input: "lucasengel@gmail.com"
      },
      phone: {
        enabled: false,
        input: ""
      }
    };

    $scope.additionalMaster = {};
    $scope.additional = {
      edit: false,
      minimun: {
        enabled: true,
        input: 12344
      },
      surcharge: {
        enabled: false,
        input: ""
      },
      instructions: {
        enabled: false,
        input: ""
      }
    };

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
      };
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
          break;
        case 'additional':
          $scope.additionalMaster = angular.copy($scope.additional);
          $scope.additional.edit = false;
          break;
      };
    };
  });
