/*global StockFilterApp, Backbone*/

StockFilterApp.Models = StockFilterApp.Models || {};

(function () {
    'use strict';

    StockFilterApp.Models.Doctor = Backbone.Model.extend({

        initialize: function () {
        },

        defaults: {
            _id: '',
            name: '',
            email: '',
            image: ''
        },

        validate: function (attrs, options) {
        },

        parse: function (response, options) {
            return response;
        }
    });

})();
