'use strict'

angular.module('accountAdminApp')
  .factory('Modal', ($uibModal, $state) => {

    function openModal (template, controller, modalObject, modalState) {
      var modalInstance = $uibModal.open({
        templateUrl: template,
        size: 'lg',
        controller: controller,
        resolve: {
          modalObject: () => modalObject,
          modalState: () => modalState || undefined
        }
      })

      console.log(modalObject, modalState)

      modalInstance.result.then(
        selectedItem => console.warn('Modal dismissed successfuly'), //in case of $close()
        () => $state.go('^') //in case of $dismiss()
      )

      return modalInstance
    }

    return {
      openModal: openModal
    }
  })
