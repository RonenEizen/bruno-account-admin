'use strict';

(function() {

class MainController {

  constructor(Modal, Auth) {
    this.navRevealed = true;
    this.settingsOpen = false;

    this.Modal = Modal;
    this.Auth = Auth;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.orders = [
      { _id: 654321, owner: 0, createdAt: new Date('20160301T12:00:00'), type: 0, status: 0, items: [{ _id: 123, variety: 1, choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, }], total: 2.20 },
      { _id: 456123, owner: 2, createdAt: new Date('20160301T12:00:00'), type: 1, status: 0, items: [{ _id: 123, variety: 1, choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, }], total: 2.20 },
      { _id: 123456, owner: 2, createdAt: new Date('20160301T12:00:00'), type: 0, status: 1, items: [{ _id: 123, variety: 1, choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, }], total: 2.20 },
      { _id: 321654, owner: 1, createdAt: new Date('20160301T12:00:00'), type: 1, status: 2, items: [{ _id: 123, variety: 1, choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, }], total: 2.20 },
      { _id: 321456, owner: 1, createdAt: new Date('20160301T12:00:00'), type: 0, status: 3, items: [{ _id: 123, variety: 1, choices: [{ 1: 1 }], options: [1], qty: 2, price: 1.10, }], total: 2.20 }
    ];
    this.orderType = [ 'Pickup', 'Delivery' ];
    this.orderStatus = [ 'Cancelled', 'New', 'In Progress', 'Fulfilled' ];
    this.foodItems = [
      { _id: 455, name: 'Sample Food', description: 'food description', picture: [1234], price: 7.50 },
      { _id: 456, name: 'Pad Thai', description: 'food description', picture: [1234], price: 8.50 },
      { _id: 457, name: 'Thai Chicken', description: 'food description', picture: [1234], price: 9.50 }
    ];
    this.customers = [
      { _id: 1, fname: "Alpha", mname: "I", lname: "Last", homePhone: "(999) 999-9999", mobilePhone: "(999) 999-9999", email: "name@domain.com", workEmail: "name@domain.com", addr: "99th Dundas St", city: 9999, state: 9, zip: 99999, orders: [12345, 12346, 12347] },
      { _id: 2, fname: "Bravo", mname: "I", lname: "Last", homePhone: "(999) 999-9999", mobilePhone: "(999) 999-9999", email: "name@domain.com", workEmail: "name@domain.com", addr: "99th Dundas St", city: 9999, state: 9, zip: 99999, orders: [12345, 12346, 12347] },
      { _id: 3, fname: "Charlie", mname: "I", lname: "Last", homePhone: "(999) 999-9999", mobilePhone: "(999) 999-9999", email: "name@domain.com", workEmail: "name@domain.com", addr: "99th Dundas St", city: 9999, state: 9, zip: 99999, orders: [12345, 12346, 12347] }
    ];
  }

  // calls the modal with the html template and user index
  customModal(html, object) {
    var modalContent = {
      modal: {
        dismissable: true,
        html: html,
        object: object
      }
    };
    return this.Modal.openModal(modalContent);
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

  // ORDERS: Sets class to rows based on order status
  setStatus = function (index) {
    return this.orderStatus[index].toLowerCase().replace(/\s+/g, '');
  };
}

angular.module('accountAdminApp')
  .controller('MainController', MainController);
})();
