'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.domainSettings.domain', {
        url: '/domain',
        onEnter: function (Modal, SettingsService) {
          Modal.domainModal(SettingsService.domain.domain)
        }
      })
      .state('main.domainSettings.subdomain', {
        url: '/subdomain',
        onEnter: function (Modal, SettingsService) {
          Modal.subdomainModal(SettingsService.domain.subdomain)
        }
      })
  });
