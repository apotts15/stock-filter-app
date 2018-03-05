/*global StockFilterApp, Backbone*/

StockFilterApp.Collections = StockFilterApp.Collections || {};

(function () {
    'use strict';
    StockFilterApp.Collections.Funds = Backbone.Collection.extend({
        initialize: function(id) {
            this.ticker = id;
        },
        url: function() {
            var route = '/funds/';
            return route;
        },
        model: StockFilterApp.Models.Fund
    });
})();
