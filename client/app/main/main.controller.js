'use strict';

(function() {

class MainController {

  constructor(
        Auth
      , CampaignService
      , CustomerService
      , DefaultsService
      , MenuService
      , OrderService
      , ReservationService
      , Modal
    ) {
    this.navRevealed = true;
    this.settingsOpen = false;

    this.modal = Modal.openModal;

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

    // OrderService
    this.orders = OrderService.orders;
    this.orderStatus = OrderService.orderStatus;
    this.orderType = OrderService.orderType;

    // ReservationService
    this.reservations = ReservationService.reservations;
  }


  countNewOrders() {
    let counter = this.orders.filter(function (order) {
      return order.status === 'new'
    });
    return counter.length;
  }

  itemPrice(prodId) {
    let price;
    this.foodItems.forEach(function (prod) {
      if (prod._id === prodId)
        price = prod.price;
    });
    return price;
  };

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
