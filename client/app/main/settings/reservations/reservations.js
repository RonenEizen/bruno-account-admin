'use strict';

angular.module('accountAdminApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.reservationsSettings.create', {
        url: '/create',
        onEnter: function (Modal, SettingsService) {
          Modal.createTableModal()
        }
      })
      .state('main.reservationsSettings.seating', {
        url: '/seating',
        onEnter: function (Modal, SettingsService) {
          Modal.seatingModal(SettingsService.reservations.seating)
        }
      })
      .state('main.reservationsSettings.table', {
        url: '/:id',
        onEnter: function (Modal, SettingsService, $stateParams) {
          Modal.tableModal(_.find(SettingsService.reservations.tables, { '_id': $stateParams.id }))
        }
      })
  });
