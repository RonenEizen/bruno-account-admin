'use strict';

angular.module('accountAdminApp')
  .service('UsersService', function () {
    this.users = [
      { _id: '1', fname: 'Lucas', mname: 'F', lname: 'Engel', role: '1', phone: '9999999999', email: 'lucasengel@gmail.com' },
      { _id: '2', fname: 'Blake', mname: '', lname: 'Liveley', role: '2', phone: '9173452680', email: 'bively@gmail.com' },
      { _id: '3', fname: 'Adam', mname: '', lname: 'Greenberg', role: '3', phone: '9175668746', email: 'adamgreen@gmail.com' },
      { _id: '4', fname: 'Buddy', mname: 'J.', lname: ' Finston', role: '4', phone: '3476062600', email: 'finjlone@yahoo.com' },
      { _id: '5', fname: 'Rosa', mname: '', lname: 'O\'Bimbel', role: '5', phone: '3472223333', email: 'doej@gmail.com' },
      { _id: '6', fname: 'Venik', mname: '', lname: 'Gromofonov', role: '6', phone: '3472223333', email: 'doej@gmail.com' },
      { _id: '7', fname: 'Ty', mname: '', lname: 'Robertson', role: '7', phone: '3472223333', email: 'doej@gmail.com' },
      { _id: '8', fname: 'Iskandr', mname: '', lname: 'Babekov', role: '7', phone: '3472223333', email: 'doej@gmail.com' }
    ];

    this.get = (id) => _.find(this.users, { '_id': id }) || {}

    this.delete = (id) => {
      let i = _.findIndex(this.users, {'_id': id })
      this.users.splice(i, 1)
    }

    this.add = (newItem) => {
      let newProps = {
        _id: (Number(this.users[this.users.length - 1]._id) + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      angular.extend(newItem, newProps);
      this.users.push(newItem);
    }

    this.put = (updatedItem) => {
      let i = _.findIndex(this.users, {'_id': updatedItem._id })
      updatedItem.updatedAt = new Date();
      this.users[i] = updatedItem;
    }
  });
