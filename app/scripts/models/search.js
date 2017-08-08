/*global OnePebbleApp, Backbone*/

OnePebbleApp.Models = OnePebbleApp.Models || {};

(function () {
    'use strict';

    OnePebbleApp.Models.Search = Backbone.Model.extend({

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
