/*global StockFilterApp, Backbone, JST*/

StockFilterApp.Views = StockFilterApp.Views || {};

(function () {
    'use strict';
    StockFilterApp.Views.Doctor = Backbone.View.extend({
        template: JST['app/scripts/templates/doctor.ejs'],
        tagName: 'div',
        collectionFun: StockFilterApp.Collections.Doctors,
        className: '',
        events: {},
        initialize: function (collection) {
            if (collection instanceof this.collectionFun) {
                this.collection = collection;
            } else {
                this.collection = new this.collectionFun();
                this.collection.fetch({
                    beforeSend: function (xhr) {
                    }, reset: true, data: {}
                });
            }
            this.listenTo(this.collection, 'reset', this.render);
        },
        render: function () {
            this.$el.html(this.template({doctors: this.collection.toJSON()}));
            $('#body').html(this.$el.html());
            this.trigger("render", "render done!");
            return this;
        }
    });
})();
