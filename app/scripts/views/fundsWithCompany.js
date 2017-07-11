/**
 * Created by apottenger on 7/12/17.
 */
/*global OnePebbleApp, Backbone, JST*/

OnePebbleApp.Views = OnePebbleApp.Views || {};

(function () {
    'use strict';
    OnePebbleApp.Views.Doctor = Backbone.View.extend({
        template: JST['app/scripts/templates/doctor.ejs'],
        tagName: 'div',
        collection: OnePebbleApp.Collections.Funds,
        className: '',
        events: {},
        initialize: function (collection) {
            if (collection instanceof this.collection) {
                this.collection = collection;
            } else {
                this.collection = new this.collection();
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
