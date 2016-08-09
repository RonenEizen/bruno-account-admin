'use strict'

angular.module('accountAdminApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.domainSettings.domain', {
        url: '/domain',
        onEnter: Modal => Modal.openModal('app/main/settings/domain/domain-modal.html', 'SettingsDomainModalCtrl')
      })
      .state('main.domainSettings.subdomain', {
        url: '/subdomain',
        onEnter: Modal => Modal.openModal('app/main/settings/domain/subdomain-modal.html', 'SettingsDomainModalCtrl')
      })
  })
