/*global OnePebbleApp, Backbone, JST*/

OnePebbleApp.Views = OnePebbleApp.Views || {};

(function () {
    'use strict';
    OnePebbleApp.Views.IndexColumn = Backbone.View.extend({
        template: JST['app/scripts/templates/indexColumns.ejs'],
        tagName: 'div',
        className: '',
        model: OnePebbleApp.Models.Index,
        collection: OnePebbleApp.Collections.Index,
        events: {},

        slyFrame: null,
        sdg: 'all',

        initialize: function (options) {
            this.model = new this.model();
            var sdgId = options.id;
            this.sdg = this.model.getSDG(sdgId);
            this.topCompanies = this.model.getTopCompanies(sdgId);

            this.collection = new this.collection(sdgId);
            this.collection.fetch({
                beforeSend: function (xhr) {
                },
                reset: true,
                complete: function (data) {
                    //  this.unDimResults();
                }
            });

            this.listenTo(this.collection, 'reset', this.render);
            this.listenTo(this.collection, 'change', this.render);
        },

        render: function (sdg) {
            console.log('render indexColumns:', sdg);
            console.log('this.collection:', this.collection);

            $('#indexCol-container').html(this.template({
                sdg: this.sdg,
                topCompanies: this.topCompanies,
                topFunds: this.collection.models,
                collection: this.collection
            }));

            $('.collapsible').collapsible();

            this.trigger("render", "render done!");
            return this;
        }
    });
})();
