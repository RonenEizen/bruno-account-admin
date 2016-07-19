'use strict';

(function() {

class MainController {

  constructor(
        Auth
      , DefaultsService
      , OrderService
      , ReservationService
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
    // DefaultsService
    this.states = DefaultsService.states;

    // OrderService
    this.orders = OrderService.orders;
    this.orderStatus = OrderService.orderStatus;
    this.orderType = OrderService.orderType;

    // ReservationService
    this.reservations = ReservationService.reservations;

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
