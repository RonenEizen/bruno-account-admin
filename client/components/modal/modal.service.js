'use strict';

angular.module('accountAdminApp')
  .factory('Modal', function ($uibModal) {
    // pass a scope to be extended to the new scope
    function openModal(scope) {
      let defaults = {
        templateUrl: 'components/modal/flyout.html',
        scope: this.$new()
      }
      angular.extend(defaults.scope, scope)
      return $uibModal.open(defaults);
    }

    return {
      openModal: openModal
    };
  });
