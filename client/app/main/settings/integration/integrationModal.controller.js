'use strict';

angular.module('accountAdminApp')
  .controller('SettingsIntegrationModalCtrl', function ($scope, SettingsService, modalObject) {
    $scope.object = modalObject;

    // var getObject = () => {
    //   let name = $state.params.name;
    //   return $scope.integrations[name] || $scope.reviews[name];
    // };
    // $scope.getName = () => {
    //   let obj = getObject();
    //   return obj.name;
    // };
    // $scope.getImg = () => {
    //   let obj = getObject();
    //   return obj.imgUrl;
    // };
    // $scope.getPlaceholder = () => {
    //   let obj = getObject();
    //   return 'Enter ' + obj.name + ' ID';
    // };
  });
