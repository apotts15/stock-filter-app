/*global StockFilterApp, Backbone, JST*/

StockFilterApp.Views = StockFilterApp.Views || {};

(function () {
    'use strict';
    StockFilterApp.Views.Footer = Backbone.View.extend({
        template: JST['app/scripts/templates/footer.ejs'],
        events: {
            //'click .twitter': 'twitter'
        },
        initialize: function () {
        },

        render: function () {
            this.$el.append(this.template({}));
            this.trigger("render", "Footer render done!");

            return this;
        }
    });
})();
