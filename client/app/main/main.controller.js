'use strict';

angular.module('userAdminApp')
  .controller('MainCtrl', function ($scope, $location, titlebarService, Auth) {
    $scope.pageTitle = titlebarService.getPageTitle();

    $scope.navRevealed = true;

    $scope.menu = [
      { link: '/', title: 'Overview' },
      { link: '/orders', title: 'Orders' },
      { link: '/reservations', title: 'Reservations' },
      { link: '/statistics', title: 'Statistics' },
      { link: '/campaigns', title: 'Campaigns' },
      { link: '/food-menus', title: 'Food Menus' },
      { link: '/customers', title: 'Customers' },
      { link: '/marketing-wizard', title: 'Marketing Wizard' },
      { link: '/site-builder', title: 'Site Builder' },
      { link: '/settings', title: 'Settings' },
      { link: '/login', title: 'Log Out' }
    ];

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
