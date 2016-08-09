'use strict'

angular.module('accountAdminApp')
  .service('PaymentsService', function () {
    this.payments = {
      enabled: true,
      bankName: 'My Bank',
      routingNo: 1234,
      accountNo: 123456789
    }

    this.get = () => this.payments || undefined

    this.put = (updatedItem) => {
      updatedItem.updatedAt = new Date()
      this.payments = updatedItem
    }
  })
