/*global OnePebbleApp, Backbone*/

OnePebbleApp.Collections = OnePebbleApp.Collections || {};

(function () {
    'use strict';
    OnePebbleApp.Collections.Funds = Backbone.Collection.extend({
        url: '/funds',
        model: OnePebbleApp.Models.Fund
    });
})();
