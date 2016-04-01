'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.domainSettings.subdomain', {
        url: '/subdomain',
        templateUrl: 'app/main/settings/domain/subdomainModal.html',
        controller: 'SettingsDomainCtrl',
        controllerAs: 'vm'
      })
      .state('main.domainSettings.domain', {
        url: '/domain',
        templateUrl: 'app/main/settings/domain/domainModal.html',
        controller: 'SettingsDomainCtrl',
        controllerAs: 'vm'
      })
  });
