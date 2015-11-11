'use strict';

angular.module('userAdminApp')
  .controller('IntegrationCtrl', function ($scope) {

    $scope.chevron = "fa-chevron-down";
    $scope.collapsed = true;
    $scope.toggle = function () {
      if ($scope.chevron === "fa-chevron-down") {
        $scope.chevron = "fa-chevron-up";
        $scope.collapsed = false;
      } else {
        $scope.chevron = "fa-chevron-down";
        $scope.collapsed = true;
      }
    };

    $scope.edit = false;
    $scope.toggleEdit = function () {
      if($scope.collapsed === true){
        $scope.toggle();
      }
      $scope.edit = !$scope.edit;
    };

    $scope.apiKey = "";
    $scope.inactive = "inactive";
  });
