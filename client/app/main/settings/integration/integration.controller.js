'use strict';

angular.module('accountAdminApp')
  .controller('SettingsIntegrationCtrl', function ($scope) {
    $scope.pageTitle = 'Integrations';

    $scope.integrations = [{
      edit: false,
      collapsed: true,
      name: 'Bookatable',
      apiKey: '123456',
      imgUrl: 'http://d1zwyexo3ug1ac.cloudfront.net/revision-e6148ed/images/pages/bookatable_logo.jpg'
    },{
      edit: false,
      collapsed: true,
      name: 'seamless',
      apiKey: '',
      imgUrl: 'http://borntocoupon.com/wp-content/uploads/2015/02/Seamless-logo.png'
    },{
      edit: false,
      collapsed: true,
      name: 'SeatMe',
      apiKey: '',
      imgUrl: 'https://github-jobs.s3.amazonaws.com/aa017848-3710-11e1-948e-e2fa802ba968.png'
    },{
      edit: false,
      collapsed: true,
      name: 'OpenTable',
      apiKey: '',
      imgUrl: 'http://www.pricelinegroup.com/wp-content/uploads/2014/07/1_Brand_logo-435x110_x2-435x110@2x.png'
    },{
      edit: false,
      collapsed: true,
      name: 'grubHub',
      apiKey: '',
      imgUrl: 'https://snowulf.com/wp-content/uploads/2015/11/grubhub.png'
    }];

    $scope.reviews = [{
      edit: false,
      collapsed: true,
      name: 'MenuPages',
      apiKey: '123',
      imgUrl: 'http://culintro.com/media/files/page/menu-pages.png'
    },{
      edit: false,
      collapsed: true,
      name: 'yelp',
      apiKey: '',
      imgUrl: 'http://static1.squarespace.com/static/54c8415ce4b0b5c877bc5bf9/55709f2ae4b0467afc6e7950/55709f59e4b00405e9c5b2e0/1433444338056/yelp.png'
    },{
      edit: false,
      collapsed: true,
      name: 'TripAdvisor',
      apiKey: '',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a6/TripAdvisor.png'
    }];

    $scope.toggle = function (element) {
        element.collapsed = !element.collapsed;
    };
    $scope.edit = function (element) {
      if (!element.edit) {
        element.edit = true;
        element.collapsed = false;
      }
    };
    $scope.save = function (element) {
      element.edit = false;
    };
  });
