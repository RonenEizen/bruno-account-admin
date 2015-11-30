'use strict';

angular.module('userAdminApp')
  .controller('ReservationsCtrl', function ($scope) {

    $scope.seatingMaster = {};
    $scope.seating = {
      edit: false,
      capacity: ''
    };
    $scope.tablesMaster = {};
    $scope.tables = {
      edit: false,
      // clear fields
      clear: function () {
        $scope.tableName = '';
        $scope.tableCapacity = '';
        $scope.tableQuantity = '';
        $scope.tableMergeable = false;
      },
      // adds new entry
      add: function (table) {
        $scope.tables.sets.push(table);
        $scope.tables.clear();
      },
      // set editing true/false to hide add new button
      editing: false,
      // copies varibles to inputs
      get: function (name,capacity,quantity,mergeable,index) {
        // gets params data to $scope
        $scope.tableName = name;
        $scope.tableCapacity = capacity;
        $scope.tableQuantity = quantity;
        $scope.tableMergeable = mergeable;
        $scope.tableIndex = index;
        // enables update icon
        $scope.tables.editing = true;
      },
      // updates entry
      update: function (table,index) {
        $scope.tables.sets.splice(index,1,table);
        $scope.tables.editing = false;
        $scope.tables.clear();
      },
      // fake data
      sets: [{ name: "Booth", capacity: 6, quantity: 5, mergeable: false },{ name: "Window", capacity: 2, quantity: 2, mergeable: true }]
    };

    // saves & reset forms
    $scope.reset = function(section) {
      switch (section) {
        case 'seating':
          $scope.seating = angular.copy($scope.seatingMaster);
          $scope.seating.edit = false;
          break;
        case 'tables':
          $scope.tables = angular.copy($scope.tablesMaster);
          $scope.tables.edit = false;
          break;
      };
    };

    $scope.save = function(section) {
      switch (section) {
        case 'seating':
          $scope.seatingMaster = angular.copy($scope.seating);
          $scope.seating.edit = false;
          break;
        case 'tables':
          $scope.tablesMaster = angular.copy($scope.tables);
          $scope.tables.edit = false;
          break;
      };
    };
  });
