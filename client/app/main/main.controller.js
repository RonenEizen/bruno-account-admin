'use strict';

(function() {

class MainController {

  constructor(Auth, OrderService, CustomerService) {
    this.navRevealed = true;
    this.settingsOpen = false;

    this.Auth = Auth;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;

    // SERVICES
    this.customers = CustomerService.customers;
    this.orders = OrderService.orders;
    this.orderStatus = OrderService.orderStatus;
    this.orderType = OrderService.orderType;

    this.foodItems = [
      { _id: 455, name: 'Sample Food', description: 'food description', picture: [1234], price: 7.50 },
      { _id: 456, name: 'Pad Thai', description: 'food description', picture: [1234], price: 8.50 },
      { _id: 457, name: 'Thai Chicken', description: 'food description', picture: [1234], price: 9.50 }
    ];
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
