/*global OnePebbleApp, Backbone*/

OnePebbleApp.Collections = OnePebbleApp.Collections || {};

(function () {
    'use strict';
    OnePebbleApp.Collections.Doctors = Backbone.Collection.extend({
        url: '/doctors',
        completed: function () {
            console.log("completed");
            return this.where({completed: true});
        },
        model: OnePebbleApp.Models.Doctor
    });
})();
