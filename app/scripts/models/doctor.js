/*global OnePebbleApp, Backbone*/

OnePebbleApp.Models = OnePebbleApp.Models || {};

(function () {
    'use strict';

    OnePebbleApp.Models.Doctor = Backbone.Model.extend({

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
