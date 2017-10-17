/*global OnePebbleApp, Backbone, JST*/

OnePebbleApp.Views = OnePebbleApp.Views || {};

(function () {
    'use strict';
    OnePebbleApp.Views.Footer = Backbone.View.extend({
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
