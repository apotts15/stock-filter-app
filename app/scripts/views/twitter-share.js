/*global StockFilterApp, Backbone, JST*/

StockFilterApp.Views = StockFilterApp.Views || {};

(function () {
    'use strict';
    StockFilterApp.Views.TwitterShare = Backbone.View.extend({
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
