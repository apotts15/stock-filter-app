/*global StockFilterApp, Backbone*/

StockFilterApp.Collections = StockFilterApp.Collections || {};

(function () {
    'use strict';
    StockFilterApp.Collections.Searches = Backbone.Collection.extend({
        url: '/search/',
        model: StockFilterApp.Models.Search
    });
})();
