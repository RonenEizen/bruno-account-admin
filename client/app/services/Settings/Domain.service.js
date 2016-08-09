'use strict'

angular.module('accountAdminApp')
  .service('DomainService', function () {
    this.domain = {
      subdomain: 'sushibar',
      domain: 'sushi.bar'
    }

    this.get = () => this.domain || undefined

    this.put = (updatedItem) => {
      updatedItem.updatedAt = new Date()
      this.domain = updatedItem
    }
  })
