'use strict';

angular.module('accountAdminApp')
  .controller('MarketingCtrl', function ($scope, MarketingService) {
    $scope.pageTitle = 'Marketing > Campaigns';

    $scope.campaignsStatus = ['Cancelled', 'Current', 'Expiring', 'Expired'];
    $scope.campaigns = MarketingService.campaigns;

    // Columns
    $scope.displayColumns = { campaign: true, enabled: true, disabled: true, status: true };
    $scope.showColumnPicker = function () {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // Filters
    $scope.openFilter = { campaign: false, enabled: false, disabled: false, status: false };
    $scope.activeFilter = undefined;
    $scope.toggleFilter = function (filterName) {
      if ($scope.openFilter[filterName]) {
        $scope.openFilter[filterName] = false;
      } else {
        for (var x in $scope.openFilter) { $scope.openFilter[x] = false; }
        $scope.invisibleLayer = true;
        $scope.openFilter[filterName] = true;
      }
    };

    // Ordering columns by
    $scope.clickedHeader = '';

    // Load More Rows
    angular.element(document).ready(() => {
      var winHeight = document.querySelector('.main-content').clientHeight;
      $scope.displayingItems = Math.floor((winHeight - 130) / 60); // sets the initial limit of displaying rows
      if ($scope.displayingItems < 3) { $scope.displayingItems = 3 }
    });
    $scope.loadMore = () => {
      var increment = $scope.displayingItems;
      if ($scope.displayingItems < $scope.campaigns.length) {
        $scope.displayingItems += increment;
        if ($scope.displayingItems >= $scope.campaigns.length) {
          $scope.moreToLoad = false;
        }
      }
    };
    $scope.moreToLoad = $scope.displayingItems < $scope.campaigns.length; // true if there're more rows to load
  });
