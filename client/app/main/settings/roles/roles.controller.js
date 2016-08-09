'use strict'

angular.module('accountAdminApp')
  .controller('SettingsRolesCtrl', function($scope, RolesService, AccessesService, RightsService) {
    $scope.pageTitle = 'Roles'

    // those are used internally only (no $scope here)
    let roles = RolesService.roles
    let accesses = AccessesService.accesses
    let rights = RightsService.rights

    $scope.roleData = (roleId) => getRoleData(roleId)

    // this function gathers data to create the $scope.roles collection
    function getRoleData(id) {
      let role = { _id: '', name: '', accesses: [], rights: [] }

      // finds the role in roles Array
      let roleObj = _.find(roles, [ '_id', id.toString() ])

      // finds the accesses in role and make a list of their names
      let rightsIds = []
      _(roleObj.accesses).forEach(function (id) {
        let access = _.find(accesses, [ '_id', id.toString() ])
        role.accesses.push(access.name)

        // Make a list of right ids
        rightsIds = _.union(rightsIds, access.rights)
      })

      // finds the rights names
      _(rightsIds).forEach(function (id) {
        let right = _.find(rights, [ '_id', id.toString() ])
        role.rights.push(right.name)
      })

      role._id = id
      role.name = roleObj.name
      return role
    }

    // list of roles that are used in the view
    $scope.roles = []
    _(roles).forEach(function (e) { $scope.roles.push(getRoleData(e._id)) })

    // Columns
    $scope.displayColumns = { role: true, access: true, rights: true }
    $scope.showColumnPicker = function () {
      $scope.pickColumns = true
      $scope.invisibleLayer = true
    }

    // Filters
    $scope.openFilter = { role: false, access: false, rights: false }
    $scope.activeFilter = undefined
    $scope.toggleFilter = function (filterName) {
      if ($scope.openFilter[filterName]) {
        $scope.openFilter[filterName] = false
      } else {
        for (var x in $scope.openFilter) { $scope.openFilter[x] = false }
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
      if ($scope.displayingItems < roles.length) {
        $scope.displayingItems += increment
        if ($scope.displayingItems >= roles.length) {
          $scope.moreToLoad = false
        }
      }
    }
    $scope.moreToLoad = $scope.displayingItems < roles.length // true if there're more rows to load
  })
