/*global StockFilterApp, Backbone*/

StockFilterApp.Models = StockFilterApp.Models || {};

(function () {
    'use strict';

    StockFilterApp.Models.Search = Backbone.Model.extend({

        initialize: function () {
        },

        defaults: {
            _id: ''
        },

        validate: function (attrs, options) {
        },

        parse: function (response, options) {
            console.log('parse', response);
            return response;
        }
    });

})();
