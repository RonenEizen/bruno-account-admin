'use strict'

angular.module('accountAdminApp')
  .service('MarketingService', function () {
    this.campaigns = [
      { _id: '1', name: 'Children Eat Free', enabled: ['facebook', 'twitter'], disabled: ['google', 'newsletter', 'banner'], status: 1 },
      { _id: '2', name: 'Lunch Special - 20% Off', enabled: ['facebook', 'twitter', 'google', 'newsletter'], disabled: ['banner'], status: 1 },
      { _id: '3', name: 'Free Coffee with Breakfast', enabled: ['newsletter', 'banner'], disabled: ['facebook', 'twitter', 'google'], status: 2 },
      { _id: '4', name: 'Dinner Specials', enabled: ['twitter', 'google', 'newsletter'], disabled: ['facebook', 'banner'], status: 0 },
      { _id: '5', name: 'Brand Awareness', enabled: ['facebook', 'twitter', 'google', 'newsletter', 'banner'], disabled: [], status: 3 }
    ]

    this.get = (id) => this.campaigns.find((item) => item._id === id) || undefined

    this.delete = (id) => {
      let i = _.findIndex(this.campaigns, {'_id': id })
      this.campaigns.splice(i, 1)
    }

    this.add = (newItem) => {
      let newProps = {
        _id: (Number(this.campaigns[this.campaigns.length - 1]._id) + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      angular.extend(newItem, newProps)
      this.campaigns.push(newItem)
    }

    this.put = (updatedItem) => {
      let i = _.findIndex(this.campaigns, {'_id': updatedItem._id })
      updatedItem.updatedAt = new Date()
      this.campaigns[i] = updatedItem
    }
  })
