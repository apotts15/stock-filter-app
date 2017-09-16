/*global OnePebbleApp, Backbone*/

OnePebbleApp.Collections = OnePebbleApp.Collections || {};

(function () {
    'use strict';
    OnePebbleApp.Collections.Funds = Backbone.Collection.extend({
        initialize: function(id) {
            this.ticker = id;
        },
        url: function() {
            var route = '/funds/';
            return route;
        },
        model: OnePebbleApp.Models.Fund
    });
})();
