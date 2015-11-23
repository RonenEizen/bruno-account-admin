'use strict';

angular.module('userAdminApp')
  .controller('IntegrationCtrl', function ($scope, $log) {
    $scope.integrations = [{
      edit: false,
      collapsed: true,
      name: 'SeatMe',
      apiKey: '123',
      imgUrl: 'https://github-jobs.s3.amazonaws.com/aa017848-3710-11e1-948e-e2fa802ba968.png'
    },{
      edit: false,
      collapsed: true,
      name: 'JoinUs',
      apiKey: '',
      imgUrl: 'https://github-jobs.s3.amazonaws.com/aa017848-3710-11e1-948e-e2fa802ba968.png'
    },{
      edit: false,
      collapsed: true,
      name: 'SeatMe',
      apiKey: '',
      imgUrl: 'https://github-jobs.s3.amazonaws.com/aa017848-3710-11e1-948e-e2fa802ba968.png'
    },{
      edit: false,
      collapsed: true,
      name: 'SeatMe',
      apiKey: '',
      imgUrl: 'https://github-jobs.s3.amazonaws.com/aa017848-3710-11e1-948e-e2fa802ba968.png'
    },{
      edit: false,
      collapsed: true,
      name: 'SeatMe',
      apiKey: '',
      imgUrl: 'https://github-jobs.s3.amazonaws.com/aa017848-3710-11e1-948e-e2fa802ba968.png'
    }];

    $scope.reviews = [{
      edit: false,
      collapsed: true,
      name: 'SeatMe',
      apiKey: '123',
      imgUrl: 'https://github-jobs.s3.amazonaws.com/aa017848-3710-11e1-948e-e2fa802ba968.png'
    },{
      edit: false,
      collapsed: true,
      name: 'SeatMe',
      apiKey: '',
      imgUrl: 'https://github-jobs.s3.amazonaws.com/aa017848-3710-11e1-948e-e2fa802ba968.png'
    },{
      edit: false,
      collapsed: true,
      name: 'SeatMe',
      apiKey: '',
      imgUrl: 'https://github-jobs.s3.amazonaws.com/aa017848-3710-11e1-948e-e2fa802ba968.png'
    }];

    $scope.toggle = function (element) {
        element.collapsed = !element.collapsed;
    };
    $scope.edit = function (element) {
      if (!element.edit) {
        element.edit = true;
        element.collapsed = false;
      };
    };
    $scope.save = function (element) {
      element.edit = false;
    }
  });
