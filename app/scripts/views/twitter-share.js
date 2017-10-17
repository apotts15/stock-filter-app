/*global OnePebbleApp, Backbone, JST*/

OnePebbleApp.Views = OnePebbleApp.Views || {};

(function () {
    'use strict';
    OnePebbleApp.Views.TwitterShare = Backbone.View.extend({
        template: JST['app/scripts/templates/twitter-share.ejs'],
        model: Backbone.Model,
        events: {},
        slyFrame: null,

        initialize: function (options) {
            // this.model = new this.model();
            // this.sdgId = options.id;
        },

        render: function () {

            this.$el.html(this.template({
            }));


            $('main').html(this.$el.html());

            this.trigger("render", "Twitter render done!");
            return this;
        }
    });
})();
