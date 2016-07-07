'use strict';

angular.module('accountAdminApp')
  .controller('SettingsUsersCtrl', function($scope, $state, SettingsService, Modal) {
    $scope.pageTitle = 'Users';

    $scope.users = SettingsService.users;
    $scope.roles = SettingsService.roles;

    // Modal calls
    $scope.createUserModal = Modal.createUserModal;
    $scope.editUserModal = Modal.editUserModal;
    $scope.removeUserModal = Modal.removeUserModal;
    $scope.viewUserModal = Modal.viewUserModal;

    $scope.$watchCollection(
      () => { return $state.params; },
      () => { $scope.userId = $state.params._id; }
    );

    $scope.getUserData = (id) => _.find($scope.users, [ '_id', id.toString() ]);
    $scope.userRole = (roleId) => _.find($scope.roles, ['_id', roleId.toString()]).name;

    // Columns
    $scope.displayColumns = {
      name: true,
      role: true,
      phone: true,
      email: true
    };
    $scope.showColumnPicker = () => {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // Filters
    $scope.openFilter = {
      name: false,
      role: false,
      phone: false,
      email: false
    };
    $scope.activeFilter = undefined;
    $scope.toggleFilter = (filterName) => {
      if ($scope.openFilter[filterName]) {
        $scope.openFilter[filterName] = false;
      } else {
        for (var x in $scope.openFilter) {
          $scope.openFilter[x] = false;
        }
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
      if ($scope.displayingItems < $scope.users.length) {
        $scope.displayingItems += increment;
        if ($scope.displayingItems >= $scope.users.length) {
          $scope.moreToLoad = false;
        }
      }
    };
    $scope.moreToLoad = $scope.displayingItems < $scope.users.length; // true if there're more rows to load
  });
