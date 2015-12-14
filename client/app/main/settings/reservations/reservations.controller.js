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
      add: function (name, capacity, quantity, mergeable) {
        $scope.tables.sets.push(
          { edit: false, name: name, capacity: capacity, quantity: quantity, mergeable: mergeable }
        );
        $scope.tables.clear();
      },
      // fake data
      sets: [
        { edit: false, name: "Booth", capacity: 6, quantity: 5, mergeable: false },
        { edit: false, name: "Window", capacity: 2, quantity: 2, mergeable: true }
      ]
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
