'use strict';

angular.module('accountAdminApp')
  .factory('Modal', function ($uibModal) {

    function openModal (template, controller, modalObject) {
      var modalInstance = $uibModal.open({
        templateUrl: template,
        size: 'lg',
        controller: controller,
        resolve: {
          object: function () {
            return modalObject;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        console.info('Modal dismissed at: ' + new Date());
      });
    };

    // $scope.cancel = () => $uibModalInstance.dismiss();

    // DASHBOARD MODALS
    var _viewTableModal = (modalObject) => openModal('app/main/dashboard/viewTableModal.html', modalObject);
    var _viewUpdatesModal = (modalObject) => openModal('app/main/dashboard/viewUpdatesModal.html', modalObject);

    // ORDERS MODALS
    var _createOrderModal = () => openModal('app/main/orders/createOrderModal.html', 'OrdersCtrl');
    var _editOrderModal = (modalObject) => openModal('app/main/orders/editOrderModal.html', 'OrdersCtrl', modalObject);
    var _viewOrderModal = (modalObject) => openModal('app/main/orders/viewOrderModal.html', 'OrdersCtrl', modalObject);

    // RESERVATIONS MODALS
    var _createReservationModal = () => openModal('app/main/reservations/createReservationModal.html', 'ReservationsCtrl', );
    var _editReservationModal = (modalObject) => openModal('app/main/reservations/editReservationModal.html', 'ReservationsCtrl', modalObject);
    var _viewReservationModal = (modalObject) => openModal('app/main/reservations/viewReservationModal.html', 'ReservationsCtrl', modalObject);

    // FOOD MENUS MODALS
    // menu
    var _foodMenuModal = (modalObject) => openModal('app/main/food-menus/foodMenuModal.html', 'FoodMenusCtrl', modalObject);
    var _createFoodMenuModal = () => openModal('app/main/food-menus/createFoodMenuModal.html', 'FoodMenusCtrl');
    var _editFoodMenuModal = (modalObject) => openModal('app/main/food-menus/editFoodMenuModal.html', 'FoodMenusCtrl', modalObject);
    var _removeFoodMenuModal = (modalObject) => openModal('app/main/food-menus/removeFoodMenuModal.html', 'FoodMenusCtrl', modalObject);
    // category
    var _menuCategoryModal = (modalObject) => openModal('app/main/food-menus/menuCategoryModal.html', 'FoodMenusCtrl', modalObject);
    var _createMenuCategoryModal = () => openModal('app/main/food-menus/createMenuCategoryModal.html', 'FoodMenusCtrl');
    var _editMenuCategoryModal = (modalObject) => openModal('app/main/food-menus/editMenuCategoryModal.html', 'FoodMenusCtrl', modalObject);
    var _removeMenuCategoryModal = (modalObject) => openModal('app/main/food-menus/removeMenuCategoryModal.html', 'FoodMenusCtrl', modalObject);
    // food item
    var _foodItemModal = (modalObject) => openModal('app/main/food-menus/foodItemModal.html', 'FoodMenusCtrl', modalObject);
    var _addExistingFoodModal = (modalObject) => openModal('app/main/food-menus/addExistingFoodModal.html', 'FoodMenusCtrl', modalObject);
    var _createFoodItemModal = () => openModal('app/main/food-menus/createFoodItemModal.html', 'FoodMenusCtrl');
    var _editFoodItemModal = (modalObject) => openModal('app/main/food-menus/editFoodItemModal.html', 'FoodMenusCtrl', modalObject);
    var _removeFoodItemModal = (modalObject) => openModal('app/main/food-menus/removeFoodItemModal.html', 'FoodMenusCtrl', modalObject);
    var _viewFoodItemModal = (modalObject) => openModal('app/main/food-menus/viewFoodItemModal.html', 'FoodMenusCtrl', modalObject);

    // MARKETING
    var _bannerCampaignModal = (modalObject) => openModal('app/main/marketing/bannerCampaignModal.html', 'MarketingCtrl', modalObject);
    var _channelsCampaign = (modalObject) => openModal('app/main/marketing/channelsCampaign.html', 'MarketingCtrl', modalObject);
    var _createCampaignModal = () => openModal('app/main/marketing/createCampaignModal.html', 'MarketingCtrl');
    var _editCampaignModal = (modalObject) => openModal('app/main/marketing/editCampaignModal.html', 'MarketingCtrl', modalObject);
    var _facebookCampaignModal = (modalObject) => openModal('app/main/marketing/facebookCampaignModal.html', 'MarketingCtrl', modalObject);
    var _googleCampaignModal = (modalObject) => openModal('app/main/marketing/googleCampaignModal.html', 'MarketingCtrl', modalObject);
    var _newsletterCampaignModal = (modalObject) => openModal('app/main/marketing/newsletterCampaignModal.html', 'MarketingCtrl', modalObject);
    var _twitterCampaignModal = (modalObject) => openModal('app/main/marketing/twitterCampaignModal.html', 'MarketingCtrl', modalObject);
    var _viewCampaignModal = (modalObject) => openModal('app/main/marketing/viewCampaignModal.html', 'MarketingCtrl', modalObject);

    // CUSTOMERS
    var _createCustomerModal = () => openModal('app/main/customers/createCustomerModal.html', 'CustomersCtrl');
    var _editCustomerModal = (modalObject) => openModal('app/main/customers/editCustomerModal.html', 'CustomersCtrl', modalObject);
    var _removeCustomerModal = (modalObject) => openModal('app/main/customers/removeCustomerModal.html', 'CustomersCtrl', modalObject);
    var _viewCustomerModal = (modalObject) => openModal('app/main/customers/viewCustomerModal.html', 'CustomersCtrl', modalObject);
    var _viewCustomerOrdersModal = (modalObject) => openModal('app/main/customers/viewCustomerOrdersModal.html', 'CustomersCtrl', modalObject);

    // SETTINGS
    // business-info
    var _businessModal = (modalObject) => openModal('app/main/settings/business-info/businessModal.html', 'SettingsBusinessInfoCtrl', modalObject);
    var _openingModal = (modalObject) => openModal('app/main/settings/business-info/openingModal.html', 'SettingsBusinessInfoCtrl', modalObject);
    var _ownerModal = (modalObject) => openModal('app/main/settings/business-info/ownerModal.html', 'SettingsBusinessInfoCtrl', modalObject);
    var _restaurantModal = (modalObject) => openModal('app/main/settings/business-info/restaurantModal.html', 'SettingsBusinessInfoCtrl', modalObject);
    // users
    var _createUserModal = () => openModal('app/main/settings/users/createUserModal.html', 'SettingsUsersCtrl');
    var _editUserModal = (modalObject) => openModal('app/main/settings/users/editUserModal.html', 'SettingsUsersCtrl', modalObject);
    var _removeUserModal = (modalObject) => openModal('app/main/settings/users/removeUserModal.html', 'SettingsUsersCtrl', modalObject);
    var _viewUserModal = (modalObject) => openModal('app/main/settings/users/viewUserModal.html', 'SettingsUsersCtrl', modalObject);
    // roles
    var _createRoleModal = () => openModal('app/main/settings/roles/createRoleModal.html', 'SettingsRolesCtrl');
    var _editRoleModal = (modalObject) => openModal('app/main/settings/roles/editRoleModal.html', 'SettingsRolesCtrl', modalObject);
    var _removeRoleModal = (modalObject) => openModal('app/main/settings/roles/removeRoleModal.html', 'SettingsRolesCtrl', modalObject);
    var _viewRoleModal = (modalObject) => openModal('app/main/settings/roles/viewRoleModal.html', 'SettingsRolesCtrl', modalObject);
    // delivery
    var _additionalModal = (modalObject) => openModal('app/main/settings/delivery/additionalModal.html', 'SettingsDeliveryCtrl', modalObject);
    var _deliveryModal = (modalObject) => openModal('app/main/settings/delivery/deliveryModal.html', 'SettingsDeliveryCtrl', modalObject);
    var _radiusModal = (modalObject) => openModal('app/main/settings/delivery/radiusModal.html', 'SettingsDeliveryCtrl', modalObject);
    var _requestsModal = (modalObject) => openModal('app/main/settings/delivery/requestsModal.html', 'SettingsDeliveryCtrl', modalObject);
    // reservations
    var _createTableModal = (modalObject) => openModal('app/main/settings/reservations/createTableModal.html', 'SettingsReservationsCtrl', modalObject);
    var _seatingModal = (modalObject) => openModal('app/main/settings/reservations/seatingModal.html', 'SettingsReservationsCtrl', modalObject);
    var _tableModal = (modalObject) => openModal('app/main/settings/reservations/tableModal.html', 'SettingsReservationsCtrl', modalObject);
    // payments
    var _bankInfoModal = (modalObject) => openModal('app/main/settings/payments/bankInfoModal.html', 'SettingsPaymentsCtrl', modalObject);
    // domain
    var _domainModal = (modalObject) => openModal('app/main/settings/domain/domainModal.html', 'SettingsDomainCtrl', modalObject);
    var _subdomainModal = (modalObject) => openModal('app/main/settings/domain/subdomainModal.html', 'SettingsDomainCtrl', modalObject);
    // integration
    var _integrationModal = (modalObject) => openModal('app/main/settings/integration/integrationModal.html', 'SettingsIntegrationCtrl', modalObject);

    return {
      viewTableModal: _viewTableModal,
      viewUpdatesModal: _viewUpdatesModal,
      createOrderModal: _createOrderModal,
      editOrderModal: _editOrderModal,
      viewOrderModal: _viewOrderModal,
      createReservationModal: _createReservationModal,
      editReservationModal: _editReservationModal,
      viewReservationModal: _viewReservationModal,
      foodMenuModal: _foodMenuModal,
      createFoodMenuModal: _createFoodMenuModal,
      editFoodMenuModal: _editFoodMenuModal,
      removeFoodMenuModal: _removeFoodMenuModal,
      menuCategoryModal: _menuCategoryModal,
      createMenuCategoryModal: _createMenuCategoryModal,
      editMenuCategoryModal: _editMenuCategoryModal,
      removeMenuCategoryModal: _removeMenuCategoryModal,
      foodItemModal: _foodItemModal,
      addExistingFoodModal: _addExistingFoodModal,
      createFoodItemModal: _createFoodItemModal,
      editFoodItemModal: _editFoodItemModal,
      removeFoodItemModal: _removeFoodItemModal,
      viewFoodItemModal: _viewFoodItemModal,
      bannerCampaignModal: _bannerCampaignModal,
      channelsCampaign: _channelsCampaign,
      createCampaignModal: _createCampaignModal,
      editCampaignModal: _editCampaignModal,
      facebookCampaignModal: _facebookCampaignModal,
      googleCampaignModal: _googleCampaignModal,
      newsletterCampaignModal: _newsletterCampaignModal,
      twitterCampaignModal: _twitterCampaignModal,
      viewCampaignModal: _viewCampaignModal,
      createCustomerModal: _createCustomerModal,
      editCustomerModal: _editCustomerModal,
      removeCustomerModal: _removeCustomerModal,
      viewCustomerModal: _viewCustomerModal,
      viewCustomerOrdersModal: _viewCustomerOrdersModal,
      businessModal: _businessModal,
      openingModal: _openingModal,
      ownerModal: _ownerModal,
      restaurantModal: _restaurantModal,
      createUserModal: _createUserModal,
      editUserModal: _editUserModal,
      removeUserModal: _removeUserModal,
      viewUserModal: _viewUserModal,
      createRoleModal: _createRoleModal,
      editRoleModal: _editRoleModal,
      removeRoleModal: _removeRoleModal,
      viewRoleModal: _viewRoleModal,
      additionalModal: _additionalModal,
      deliveryModal: _deliveryModal,
      radiusModal: _radiusModal,
      requestsModal: _requestsModal,
      createTableModal: _createTableModal,
      seatingModal: _seatingModal,
      tableModal: _tableModal,
      bankInfoModal: _bankInfoModal,
      domainModal: _domainModal,
      subdomainModal: _subdomainModal,
      integrationModal: _integrationModal
    };
  });
