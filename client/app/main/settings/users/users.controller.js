'use strict'

angular.module('accountAdminApp')
  .controller('SettingsUsersCtrl', function($scope, UsersService, RolesService) {
    const SERVICE = UsersService

    $scope.pageTitle = 'Users'

    $scope.users = SERVICE.users
    $scope.roles = RolesService.roles

    $scope.userRole = (roleId) => _.find($scope.roles, ['_id', roleId.toString()]).name

    // Columns
    $scope.displayColumns = {
      name: true,
      role: true,
      phone: true,
      email: true
    }
    $scope.showColumnPicker = () => {
      $scope.pickColumns = true
      $scope.invisibleLayer = true
    }

    // Filters
    $scope.openFilter = {
      name: false,
      role: false,
      phone: false,
      email: false
    }
    $scope.activeFilter = undefined
    $scope.toggleFilter = (filterName) => {
      if ($scope.openFilter[filterName]) {
        $scope.openFilter[filterName] = false
      } else {
        for (var x in $scope.openFilter) {
          $scope.openFilter[x] = false
        }
        $scope.invisibleLayer = true
        $scope.openFilter[filterName] = true
      }
    }

    // Ordering columns by
    $scope.clickedHeader = ''

    // Load More Rows
    angular.element(document).ready(() => {
      var winHeight = document.querySelector('.main-content').clientHeight
      $scope.displayingItems = Math.floor((winHeight - 130) / 60) // sets the initial limit of displaying rows
      if ($scope.displayingItems < 3) { $scope.displayingItems = 3 }
    })
    $scope.loadMore = () => {
      var increment = $scope.displayingItems
      if ($scope.displayingItems < $scope.users.length) {
        $scope.displayingItems += increment
        if ($scope.displayingItems >= $scope.users.length) {
          $scope.moreToLoad = false
        }
      }
    }
    $scope.moreToLoad = $scope.displayingItems < $scope.users.length // true if there're more rows to load
  })
