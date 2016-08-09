'use strict'

angular.module('accountAdminApp')
  .service('IntegrationsService', function () {
    this.integrations = [
      { _id: 'bookatable', apiKey: '12345ABC&^', name: 'Bookatable', imgUrl: 'http://d1zwyexo3ug1ac.cloudfront.net/revision-e6148ed/images/pages/bookatable_logo.jpg' },
      { _id: 'seamless', apiKey: '12345ABC&^', name: 'seamless', imgUrl: 'http://borntocoupon.com/wp-content/uploads/2015/02/Seamless-logo.png' },
      { _id: 'seatme', apiKey: '', name: 'SeatMe', imgUrl: 'https://github-jobs.s3.amazonaws.com/aa017848-3710-11e1-948e-e2fa802ba968.png' },
      { _id: 'opentable', apiKey: '', name: 'OpenTable', imgUrl: 'http://www.pricelinegroup.com/wp-content/uploads/2014/07/1_Brand_logo-435x110_x2-435x110@2x.png' },
      { _id: 'grubhub', apiKey: '12345ABC&^', name: 'grubHub', imgUrl: 'https://snowulf.com/wp-content/uploads/2015/11/grubhub.png' },
      { _id: 'menupages', apiKey: '12345ABC&^', name: 'MenuPages', imgUrl: 'http://culintro.com/media/files/page/menu-pages.png' },
      { _id: 'yelp', apiKey: '12345ABC&^', name: 'yelp', imgUrl: 'http://static1.squarespace.com/static/54c8415ce4b0b5c877bc5bf9/55709f2ae4b0467afc6e7950/55709f59e4b00405e9c5b2e0/1433444338056/yelp.png' },
      { _id: 'tripadvisor', apiKey: '', name: 'TripAdvisor', imgUrl: 'https://static.tacdn.com/img2/branding/TA_550x370.png' }
    ]

    this.get = (name) => this.integrations.find((item) => item._id === name) || undefined

    this.put = (updatedItem) => {
      console.log(updatedItem)
      let i = _.findIndex(this.integrations, {'_id': updatedItem._id })
      updatedItem.updatedAt = new Date()
      this.integrations[i] = updatedItem
    }
  })
