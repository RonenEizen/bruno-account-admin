'use strict'

angular.module('accountAdminApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.reservationsSettings.create', {
        url: '/create',
        onEnter: Modal => Modal.openModal('app/main/settings/reservations/create-table-modal.html', 'SettingsReservationsModalCtrl')
      })

      .state('main.reservationsSettings.seating', {
        url: '/seating',
        onEnter: Modal => Modal.openModal('app/main/settings/reservations/seating-modal.html', 'SettingsSeatingModalCtrl')
      })

      .state('main.reservationsSettings.table', {
        url: '/:id',
        onEnter: (Modal, $stateParams) => Modal.openModal('app/main/settings/reservations/table-modal.html', 'SettingsReservationsModalCtrl', $stateParams.id)
      })
  })
