'use strict';

angular.module('accountAdminApp')
  .service('RolesService', function () {
    this.roles = [
      { _id: '1', name: 'Owner', accesses: ['1'], singleton: true },
      { _id: '2', name: 'Admin', accesses: ['1'], singleton: false },
      { _id: '3', name: 'Host', accesses: ['3', '4'], singleton: false },
      { _id: '4', name: 'Chef', accesses: ['4'], singleton: false },
      { _id: '5', name: 'Cook', accesses: ['4'], singleton: false },
      { _id: '6', name: 'Busboy', accesses: [], singleton: false },
      { _id: '7', name: 'Driver', accesses: ['5'], singleton: false }
    ];

    this.get = (id) => _.find(this.roles, { '_id': id }) || {}

    this.delete = (id) => {
      let i = _.findIndex(this.roles, {'_id': id })
      this.roles.splice(i, 1)
    }

    this.add = (newItem) => {
      let newProps = {
        _id: (Number(this.roles[this.roles.length - 1]._id) + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      angular.extend(newItem, newProps);
      this.roles.push(newItem);
    }

    this.put = (updatedItem) => {
      let i = _.findIndex(this.roles, {'_id': updatedItem._id })
      updatedItem.updatedAt = new Date();
      this.roles[i] = updatedItem;
    }
  });
