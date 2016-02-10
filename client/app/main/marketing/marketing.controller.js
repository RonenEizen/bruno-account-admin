'use strict';

angular.module('accountAdminApp')
  .controller('MarketingCtrl', function ($scope) {
    $scope.pageTitle = 'Marketing > Campaigns';

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
    $scope.displayingCampaigns = 3; // sets the initial limit of displaying rows
    $scope.loadMore = true; // true if there're more rows to load
    $scope.loadMore = function () {
      var increment = 3;
      if ($scope.displayingCampaigns < $scope.campaigns.length) {
        $scope.displayingCampaigns += increment;
        if ($scope.displayingCampaigns >= $scope.campaigns.length) {
          $scope.loadMore = false;
        }
      }
    };

    // FAKE DATA
    $scope.campaignsStatus = ['Cancelled', 'Current', 'Expiring', 'Expired'];
    $scope.campaigns = [
      // LEGEND
      // fb = Facebook | tw = Twitter | ga = Google Adwords | em = Email Marketing | bn = Site Banner
      { name: 'Children Eat Free',           enabled: ['fb', 'tw'],                    disabled: ['ga', 'em', 'bn'],  status: 1 },
      { name: 'Lunch Special - 20% Off',     enabled: ['fb', 'tw', 'ga', 'em'],        disabled: ['bn'],              status: 1 },
      { name: 'Free Coffee with Breakfast',  enabled: ['em', 'bn'],                    disabled: ['fb', 'tw', 'ga'],  status: 2 },
      { name: 'Dinner Specials',             enabled: ['tw', 'ga', 'em'],              disabled: ['fb', 'bn'],        status: 0 },
      { name: 'Brand Awareness',             enabled: ['fb', 'tw', 'ga', 'em', 'bn'],  disabled: [],                  status: 3 }
    ];
  });
