'use strict';

angular.module('accountAdminApp')
  .service('RightsService', function () {
    this.rights = [
      { _id: '1', name: 'Edit Reservations', accesses: ['1', '2', '3'] },
      { _id: '2', name: 'Edit Settings', accesses: ['1', '2'] },
      { _id: '3', name: 'Edit Orders', accesses: ['1', '2', '4'] },
      { _id: '4', name: 'Edit Users', accesses: ['1', '2'] },
      { _id: '5', name: 'View Roles', accesses: ['5'] }
    ];

    this.get = (id) => _.find(this.rights, { '_id': id }) || {}

    this.delete = (id) => {
      let i = _.findIndex(this.rights, {'_id': id })
      this.rights.splice(i, 1)
    }

    this.add = (newItem) => {
      let newProps = {
        _id: (Number(this.rights[this.rights.length - 1]._id) + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      angular.extend(newItem, newProps);
      this.rights.push(newItem);
    }

    this.put = (updatedItem) => {
      let i = _.findIndex(this.rights, {'_id': updatedItem._id })
      updatedItem.updatedAt = new Date();
      this.rights[i] = updatedItem;
    }
  });
