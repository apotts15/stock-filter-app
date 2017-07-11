/*global OnePebbleApp, Backbone*/

OnePebbleApp.Collections = OnePebbleApp.Collections || {};

(function () {
    'use strict';
    OnePebbleApp.Collections.Searches = Backbone.Collection.extend({
        url: '/search/',
        model: OnePebbleApp.Models.Search
    });
})();
