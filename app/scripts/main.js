/*global OnePebbleApp, $*/
//Backbone.history.start({pushState: true})
window.OnePebbleApp = {
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
    OnePebbleApp.init();
});
