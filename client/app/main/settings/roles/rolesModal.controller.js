'use strict';

angular.module('accountAdminApp')
  .controller('SettingsRolesModalCtrl', function($scope, SettingsService, modalObject, modalState) {

    var roles = SettingsService.roles;
    var accesses = SettingsService.accesses;
    var rights = SettingsService.rights;
    $scope.object = modalObject;
    $scope.action = modalState;

    $scope.roleData = (roleId) => getRoleData(roleId);

    // this function gathers data to create the $scope.roles collection
    function getRoleData(id) {
      let role = { _id: '', name: '', accesses: [], rights: [] };

      // finds the role in roles Array
      let roleObj = _.find(roles, [ '_id', id.toString() ]);

      // finds the accesses in role and make a list of their names
      let rightsIds = [];
      _(roleObj.accesses).forEach(function (id) {
        let access = _.find(accesses, [ '_id', id.toString() ]);
        role.accesses.push(access.name);

        // Make a list of right ids
        rightsIds = _.union(rightsIds, access.rights);
      });

      // finds the rights names
      _(rightsIds).forEach(function (id) {
        let right = _.find(rights, [ '_id', id.toString() ]);
        role.rights.push(right.name);
      });

      role._id = id;
      role.name = roleObj.name;
      return role;
    };

    // list of roles that are used in the view
    $scope.roles = [];
    _(roles).forEach(function (e) { $scope.roles.push(getRoleData(e._id)) });
  });
