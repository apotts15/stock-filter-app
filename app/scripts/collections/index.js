/*global StockFilterApp, Backbone*/

StockFilterApp.Collections = StockFilterApp.Collections || {};

(function () {
    'use strict';
    StockFilterApp.Collections.Index = Backbone.Collection.extend({
        initialize: function(id) {
            this.sdg = id;
        },
        url: function() {
            return '/funds/index/' + this.sdg;
        },
        model: StockFilterApp.Models.Fund
    });
})();