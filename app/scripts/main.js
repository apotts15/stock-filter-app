/*global OnePebbleApp, $*/
//Backbone.history.start({pushState: true})
window.OnePebbleApp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    OnePebbleApp.init();
    var searchView = new OnePebbleApp.Views.Search({
        el: $('.nav-wrapper')
    });
    searchView.render();
});
