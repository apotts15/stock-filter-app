/*global OnePebbleApp, Backbone, JST*/

OnePebbleApp.Views = OnePebbleApp.Views || {};

(function () {
    'use strict';
    OnePebbleApp.Views.Fund = Backbone.View.extend({
        template: JST['app/scripts/templates/fund.ejs'],
        tagName: 'div',
        model: OnePebbleApp.Models.Fund,
        collection: OnePebbleApp.Collections.Funds,
        className: '',
        events: {
            "dblclick"           : "clickit",
            "click body"         : "clickit",
            "click .ticker-container"         : "clickit"

        },

        clickit: function () {
         // alert('click the wat');
        },

        initialize: function (attr) {

            this.model = new this.model(attr.id);
            this.model.fetch({
                beforeSend: function (xhr) {
                }, reset: true, data: {}
            }).done(function (data) {
                console.log(this.data = data);
            })
            this.listenTo(this.model, 'reset', this.render);
            this.listenTo(this.model, 'change', this.render);
            this.$el.on('click', this.clickit);

        },
        render: function () {
            this.$el.html(this.template({fund: this.model.toJSON()}));
            $('#body').html(this.$el.html());
            this.trigger("render", "render done!");
            return this;
        },
        remove: function () {
            this.undelegateEvents();
        }
    });
})();
