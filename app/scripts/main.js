/*global StockFilterApp, $*/
//Backbone.history.start({pushState: true})
window.StockFilterApp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';

        // cache search filters
        if (!window.searchCache) {
          window.searchCache = [];
        }
    }
};

$(document).ready(function () {
    'use strict';
    StockFilterApp.init();
});
