'use strict';

(function() {

class MainController {

  constructor(
        Auth
      , CampaignService
      , CustomerService
      , DefaultsService
      , MarketingService
      , MenuService
      , OrderService
      , ReservationService
      , SettingsService
      , $state
    ) {
    this.navRevealed = true;
    this.toggleNav = () => {
      var el = document.querySelector('.hamburger')
      el.classList.toggle('open')
      this.navRevealed = !this.navRevealed;
    }

    this.settingsOpen = false;

    this.Auth = Auth;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;


    // SERVICES
    // CampaignService
    this.campaigns = CampaignService.campaigns;

    // CustomerService
    this.customers = CustomerService.customers;

    // DefaultsService
    this.states = DefaultsService.states;

    // MenuService
    // this.menus = MenuService.menus;
    // this.categories = MenuService.categories;
    this.foodItems = MenuService.foodItems;

    // MarketingService
    this.campaigns = MarketingService.campaigns;

    // OrderService
    this.orders = OrderService.orders;
    this.orderStatus = OrderService.orderStatus;
    this.orderType = OrderService.orderType;

    // ReservationService
    this.reservations = ReservationService.reservations;

    // SettingsService
    this.businessInfo = SettingsService.businessInfo;
    this.users = SettingsService.users;
    this.roles = SettingsService.roles;
    this.accesses = SettingsService.accesses;
    this.rights = SettingsService.rights;
    this.delivery = SettingsService.delivery;
    this.reservationSettings = SettingsService.reservations;
    this.onlinePayments = SettingsService.onlinePayments;
    this.domain = SettingsService.domain;
    this.integrations = SettingsService.integrations;
    this.reviews = SettingsService.reviews;

    this.go = (dest = '^') => { $state.go(dest); };
  }


  countNewOrders() {
    let counter = this.orders.filter(function (order) {
      return order.status === 'new';
    });
    return counter.length;
  }

  itemPrice(prodId) {
    let price;
    this.foodItems.forEach(function (prod) {
      if (prod._id === prodId) { price = prod.price; }
    });
    return price;
  }


  logout() {
     this.Auth.logout();
  }

  isActive() {
    // return route === $location.path();
  }
}

angular.module('accountAdminApp')
  .controller('MainController', MainController);
})();
