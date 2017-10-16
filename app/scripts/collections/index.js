/*global OnePebbleApp, Backbone*/

OnePebbleApp.Collections = OnePebbleApp.Collections || {};

(function () {
    'use strict';
    OnePebbleApp.Collections.Index = Backbone.Collection.extend({
        initialize: function(id) {
            this.sdg = id;
        },
        url: function() {
            return '/funds/index/' + this.sdg;
        },
        model: OnePebbleApp.Models.Fund
    });
})();