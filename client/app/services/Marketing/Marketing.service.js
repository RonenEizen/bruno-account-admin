'use strict';

angular.module('accountAdminApp')
  .service('MarketingService', function () {
    this.campaigns = [
      // LEGEND
      // fb = Facebook | tw = Twitter | ga = Google Adwords | em = Email Marketing | bn = Site Banner
      { _id: '1', name: 'Children Eat Free',           enabled: ['fb', 'tw'],                    disabled: ['ga', 'em', 'bn'],  status: 1 },
      { _id: '2', name: 'Lunch Special - 20% Off',     enabled: ['fb', 'tw', 'ga', 'em'],        disabled: ['bn'],              status: 1 },
      { _id: '3', name: 'Free Coffee with Breakfast',  enabled: ['em', 'bn'],                    disabled: ['fb', 'tw', 'ga'],  status: 2 },
      { _id: '4', name: 'Dinner Specials',             enabled: ['tw', 'ga', 'em'],              disabled: ['fb', 'bn'],        status: 0 },
      { _id: '5', name: 'Brand Awareness',             enabled: ['fb', 'tw', 'ga', 'em', 'bn'],  disabled: [],                  status: 3 }
    ];
  });
