'use strict';

angular.module('accountAdminApp')
  .factory('Modal', function ($uibModal, $state) {

    function openModal (template, controller, modalObject, modalState) {
      var modalInstance = $uibModal.open({
        templateUrl: template,
        size: 'lg',
        controller: controller,
        resolve: {
          modalObject: () => modalObject,
          modalState: () => modalState
        }
      });

      console.log(modalObject, modalState)

      modalInstance.result.then(function (selectedItem) { //in case of $close()
        console.warn('Modal dismissed successfuly')
      }, function () { //in case of $dismiss()
        $state.go('^')
      });
    };

    // DASHBOARD MODALS
    var _viewUpdates = (modalObject) => openModal('app/main/dashboard/viewUpdatesModal.html', 'DashboardModalCtrl', modalObject);

    // ORDERS MODALS
    var _createOrder = (modalObject) => openModal('app/main/orders/createOrderModal.html', 'OrdersModalCtrl', {items:[]});
    var _viewOrder = (modalObject, modalState) => openModal('app/main/orders/orderModal.html', 'OrdersModalCtrl', modalObject, modalState);

    // RESERVATIONS MODALS
    var _createReservation = () => openModal('app/main/reservations/createReservationModal.html', 'ReservationsModalCtrl', );
    var _viewReservation = (modalObject, modalState) => openModal('app/main/reservations/reservationModal.html', 'ReservationsModalCtrl', modalObject, modalState);

    // FOOD MENUS MODALS
    // menu
    var _createFoodMenu = () => openModal('app/main/food-menus/createFoodMenuModal.html', 'FoodMenusModalCtrl');
    var _viewFoodMenu = (modalObject, modalState) => openModal('app/main/food-menus/foodMenuModal.html', 'FoodMenusModalCtrl', modalObject, modalState);
    // category
    var _createMenuCategory = () => openModal('app/main/food-menus/createMenuCategoryModal.html', 'FoodMenusModalCtrl');
    var _viewMenuCategory = (modalObject, modalState) => openModal('app/main/food-menus/menuCategoryModal.html', 'FoodMenusModalCtrl', modalObject, modalState);
    // food item
    var _addFoodItem = (modalObject, modalState) => openModal('app/main/food-menus/addFoodItemModal.html', 'FoodMenusModalCtrl', modalObject, modalState);
    var _createFoodItem = () => openModal('app/main/food-menus/createFoodItemModal.html', 'FoodMenusModalCtrl');
    var _viewFoodItem = (modalObject, modalState) => openModal('app/main/food-menus/foodItemModal.html', 'FoodMenusModalCtrl', modalObject, modalState);

    // MARKETING
    var _createCampaign = () => openModal('app/main/marketing/createCampaignModal.html', 'MarketingModalCtrl');
    var _viewCampaign = (modalObject, modalState) => openModal('app/main/marketing/campaignModal.html', 'MarketingModalCtrl', modalObject, modalState);

    // CUSTOMERS
    var _createCustomer = () => openModal('app/main/customers/createCustomerModal.html', 'CustomersModalCtrl');
    var _viewCustomer = (modalObject, modalState) => openModal('app/main/customers/customerModal.html', 'CustomersModalCtrl', modalObject, modalState);

    // SETTINGS
    // business-info
    var _business = (modalObject) => openModal('app/main/settings/business-info/businessModal.html', 'SettingsBusinessInfoModalCtrl', modalObject);
    var _opening = (modalObject) => openModal('app/main/settings/business-info/openingModal.html', 'SettingsBusinessInfoModalCtrl', modalObject);
    var _owner = (modalObject) => openModal('app/main/settings/business-info/ownerModal.html', 'SettingsBusinessInfoModalCtrl', modalObject);
    var _restaurant = (modalObject) => openModal('app/main/settings/business-info/restaurantModal.html', 'SettingsBusinessInfoModalCtrl', modalObject);
    // users
    var _createUser = () => openModal('app/main/settings/users/createUserModal.html', 'SettingsUsersModalCtrl');
    var _viewUser = (modalObject, modalState) => openModal('app/main/settings/users/userModal.html', 'SettingsUsersModalCtrl', modalObject, modalState);
    // roles
    var _createRole = () => openModal('app/main/settings/roles/createRoleModal.html', 'SettingsRolesModalCtrl');
    var _viewRole = (modalObject, modalState) => openModal('app/main/settings/roles/roleModal.html', 'SettingsRolesModalCtrl', modalObject, modalState);
    // delivery
    var _additional = (modalObject) => openModal('app/main/settings/delivery/additionalModal.html', 'SettingsDeliveryModalCtrl', modalObject);
    var _delivery = (modalObject) => openModal('app/main/settings/delivery/deliveryModal.html', 'SettingsDeliveryModalCtrl', modalObject);
    var _radius = (modalObject) => openModal('app/main/settings/delivery/radiusModal.html', 'SettingsDeliveryModalCtrl', modalObject);
    var _requests = (modalObject) => openModal('app/main/settings/delivery/requestsModal.html', 'SettingsDeliveryModalCtrl', modalObject);
    // reservations
    var _createTable = (modalObject) => openModal('app/main/settings/reservations/createTableModal.html', 'SettingsReservationsModalCtrl', modalObject);
    var _seating = (modalObject) => openModal('app/main/settings/reservations/seatingModal.html', 'SettingsReservationsModalCtrl', modalObject);
    var _table = (modalObject) => openModal('app/main/settings/reservations/tableModal.html', 'SettingsReservationsModalCtrl', modalObject);
    // payments
    var _bankInfo = (modalObject) => openModal('app/main/settings/payments/bankInfoModal.html', 'SettingsPaymentsModalCtrl', modalObject);
    // domain
    var _domain = (modalObject) => openModal('app/main/settings/domain/domainModal.html', 'SettingsDomainModalCtrl', modalObject);
    var _subdomain = (modalObject) => openModal('app/main/settings/domain/subdomainModal.html', 'SettingsDomainModalCtrl', modalObject);
    // integration
    var _integration = (modalObject) => openModal('app/main/settings/integration/integrationModal.html', 'SettingsIntegrationModalCtrl', modalObject);

    return {
      updatesModal: _viewUpdates,

      createOrderModal: _createOrder,
      orderModal: _viewOrder,

      createReservationModal: _createReservation,
      reservationModal: _viewReservation,

      createFoodMenuModal: _createFoodMenu,
      foodMenuModal: _viewFoodMenu,

      createMenuCategoryModal: _createMenuCategory,
      menuCategoryModal: _viewMenuCategory,

      addFoodItemModal: _addFoodItem,
      createFoodItemModal: _createFoodItem,
      foodItemModal: _viewFoodItem,

      createCampaignModal: _createCampaign,
      campaignModal: _viewCampaign,

      createCustomerModal: _createCustomer,
      customerModal: _viewCustomer,

      businessModal: _business,
      openingModal: _opening,
      ownerModal: _owner,
      restaurantModal: _restaurant,

      createUserModal: _createUser,
      userModal: _viewUser,

      createRoleModal: _createRole,
      roleModal: _viewRole,

      additionalModal: _additional,
      deliveryModal: _delivery,
      radiusModal: _radius,
      requestsModal: _requests,

      createTableModal: _createTable,
      seatingModal: _seating,
      tableModal: _table,

      bankInfoModal: _bankInfo,

      domainModal: _domain,
      subdomainModal: _subdomain,

      integrationModal: _integration
    };
  });
