'use strict';

angular.module('accountAdminApp')
  .factory('Modal', function ($uibModal) {

    function openModal (template, controller, modalObject) {
      var modalInstance = $uibModal.open({
        templateUrl: template,
        size: 'lg',
        controller: controller,
        resolve: {
          object: () => modalObject
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        console.info('Modal dismissed at: ' + new Date());
      });
    };

    // DASHBOARD MODALS
    var _viewTable = (modalObject) => openModal('app/main/dashboard/viewTableModal.html', 'DashboardCtrl', modalObject);
    var _viewUpdates = (modalObject) => openModal('app/main/dashboard/viewUpdatesModal.html', 'DashboardCtrl', modalObject);

    // ORDERS MODALS
    var _createOrder = () => openModal('app/main/orders/createOrderModal.html', 'OrdersCtrl');
    var _viewOrder = (modalObject) => openModal('app/main/orders/orderModal.html', 'OrdersCtrl', modalObject);

    // RESERVATIONS MODALS
    var _createReservation = () => openModal('app/main/reservations/createReservationModal.html', 'ReservationsCtrl', );
    var _viewReservation = (modalObject) => openModal('app/main/reservations/reservationModal.html', 'ReservationsCtrl', modalObject);

    // FOOD MENUS MODALS
    // menu
    var _createFoodMenu = () => openModal('app/main/food-menus/createFoodMenuModal.html', 'FoodMenusCtrl');
    var _viewFoodMenu = (modalObject) => openModal('app/main/food-menus/foodMenuModal.html', 'FoodMenusCtrl', modalObject);
    // category
    var _createMenuCategory = () => openModal('app/main/food-menus/createMenuCategoryModal.html', 'FoodMenusCtrl');
    var _viewMenuCategory = (modalObject) => openModal('app/main/food-menus/menuCategoryModal.html', 'FoodMenusCtrl', modalObject);
    // food item
    var _addFoodItem = (modalObject) => openModal('app/main/food-menus/addFoodItemModal.html', 'FoodMenusCtrl', modalObject);
    var _createFoodItem = () => openModal('app/main/food-menus/createFoodItemModal.html', 'FoodMenusCtrl');
    var _viewFoodItem = (modalObject) => openModal('app/main/food-menus/foodItemModal.html', 'FoodMenusCtrl', modalObject);

    // MARKETING
    var _bannerCampaign = (modalObject) => openModal('app/main/marketing/bannerCampaignModal.html', 'MarketingCtrl', modalObject);
    var _channelsCampaign = (modalObject) => openModal('app/main/marketing/channelsCampaign.html', 'MarketingCtrl', modalObject);
    var _createCampaign = () => openModal('app/main/marketing/createCampaignModal.html', 'MarketingCtrl');
    var _editCampaign = (modalObject) => openModal('app/main/marketing/editCampaignModal.html', 'MarketingCtrl', modalObject);
    var _facebookCampaign = (modalObject) => openModal('app/main/marketing/facebookCampaignModal.html', 'MarketingCtrl', modalObject);
    var _googleCampaign = (modalObject) => openModal('app/main/marketing/googleCampaignModal.html', 'MarketingCtrl', modalObject);
    var _newsletterCampaign = (modalObject) => openModal('app/main/marketing/newsletterCampaignModal.html', 'MarketingCtrl', modalObject);
    var _twitterCampaign = (modalObject) => openModal('app/main/marketing/twitterCampaignModal.html', 'MarketingCtrl', modalObject);
    var _viewCampaign = (modalObject) => openModal('app/main/marketing/viewCampaignModal.html', 'MarketingCtrl', modalObject);

    // CUSTOMERS
    var _createCustomer = () => openModal('app/main/customers/createCustomerModal.html', 'CustomersCtrl');
    var _viewCustomer = (modalObject) => openModal('app/main/customers/customerModal.html', 'CustomersCtrl', modalObject);
    var _viewCustomerOrders = (modalObject) => openModal('app/main/customers/viewCustomerOrdersModal.html', 'CustomersCtrl', modalObject);

    // SETTINGS
    // business-info
    var _business = (modalObject) => openModal('app/main/settings/business-info/businessModal.html', 'SettingsBusinessInfoCtrl', modalObject);
    var _opening = (modalObject) => openModal('app/main/settings/business-info/openingModal.html', 'SettingsBusinessInfoCtrl', modalObject);
    var _owner = (modalObject) => openModal('app/main/settings/business-info/ownerModal.html', 'SettingsBusinessInfoCtrl', modalObject);
    var _restaurant = (modalObject) => openModal('app/main/settings/business-info/restaurantModal.html', 'SettingsBusinessInfoCtrl', modalObject);
    // users
    var _createUser = () => openModal('app/main/settings/users/createUserModal.html', 'SettingsUsersCtrl');
    var _viewUser = (modalObject) => openModal('app/main/settings/users/userModal.html', 'SettingsUsersCtrl', modalObject);
    // roles
    var _createRole = () => openModal('app/main/settings/roles/createRoleModal.html', 'SettingsRolesCtrl');
    var _viewRole = (modalObject) => openModal('app/main/settings/roles/roleModal.html', 'SettingsRolesCtrl', modalObject);
    // delivery
    var _additional = (modalObject) => openModal('app/main/settings/delivery/additionalModal.html', 'SettingsDeliveryCtrl', modalObject);
    var _delivery = (modalObject) => openModal('app/main/settings/delivery/deliveryModal.html', 'SettingsDeliveryCtrl', modalObject);
    var _radius = (modalObject) => openModal('app/main/settings/delivery/radiusModal.html', 'SettingsDeliveryCtrl', modalObject);
    var _requests = (modalObject) => openModal('app/main/settings/delivery/requestsModal.html', 'SettingsDeliveryCtrl', modalObject);
    // reservations
    var _createTable = (modalObject) => openModal('app/main/settings/reservations/createTableModal.html', 'SettingsReservationsCtrl', modalObject);
    var _seating = (modalObject) => openModal('app/main/settings/reservations/seatingModal.html', 'SettingsReservationsCtrl', modalObject);
    var _table = (modalObject) => openModal('app/main/settings/reservations/tableModal.html', 'SettingsReservationsCtrl', modalObject);
    // payments
    var _bankInfo = (modalObject) => openModal('app/main/settings/payments/bankInfoModal.html', 'SettingsPaymentsCtrl', modalObject);
    // domain
    var _domain = (modalObject) => openModal('app/main/settings/domain/domainModal.html', 'SettingsDomainCtrl', modalObject);
    var _subdomain = (modalObject) => openModal('app/main/settings/domain/subdomainModal.html', 'SettingsDomainCtrl', modalObject);
    // integration
    var _integration = (modalObject) => openModal('app/main/settings/integration/integrationModal.html', 'SettingsIntegrationCtrl', modalObject);

    return {
      viewTableModal: _viewTable,
      viewUpdatesModal: _viewUpdates,

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

      bannerCampaignModal: _bannerCampaign,
      channelsCampaign: _channelsCampaign,
      createCampaignModal: _createCampaign,
      editCampaignModal: _editCampaign,
      facebookCampaignModal: _facebookCampaign,
      googleCampaignModal: _googleCampaign,
      newsletterCampaignModal: _newsletterCampaign,
      twitterCampaignModal: _twitterCampaign,
      viewCampaignModal: _viewCampaign,

      createCustomerModal: _createCustomer,
      customerModal: _viewCustomer,
      customerOrdersModal: _viewCustomerOrders,

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
