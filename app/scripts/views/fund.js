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
            "dblclick" : "clickit",
            "click body" : "clickit",
            "click .ticker-container" : "clickit"
        },

        clickit: function () {
         // alert('click the wat');
        },

        initialize: function (attr) {
            console.log(attr.id);
            this.model = new this.model({ticker: attr.id});
            this.model.fetch({
                beforeSend: function (xhr) {
                }, reset: true, data: {}
            }).done(function (data) {
                console.log(this.data = data);
            });
            this.listenTo(this.model, 'reset', this.render);
            this.listenTo(this.model, 'change', this.render);
            this.$el.on('click', this.clickit);
            console.log(this.model.attributes);
        },


        render: function () {
            this.$el.html(this.template({iconSet: this.iconSet, fund: this.model.toJSON()}));
            $('main').html(this.$el.html());
            $(window).scrollTop(0);
            this.typeahead();

            this.tooltip();

            this.trigger("render", "render done!");
            return this;
        },

        tooltip: function() {
            $('.tip').tipr();
        },

        typeahead: function() {
            var searchView = new OnePebbleApp.Views.Search({
                el: $('.nav-wrapper'),
                enableBrand: true
            });
            searchView.render();
        },

        iconSet: {
            'Taxable Money Market': 'attach_money',
            'Unknown Category': 'battery_unknown',
            'Nontraditional Bond': 'multiline_chart',
            'Retirement Target Portfolio': 'pie_chart',
            'U.S. Large Blend': 'equalizer',
            'U.S. Mid-Cap Blend': 'insert_chart',
            'U.S. Small Blend': 'bubble_chart',
            'Aggressive Allocation Portfolio': 'trending_up',
            'Foreign Large Growth': 'multiline_chart',
            'default': 'pie_chart_outlined'
        },
        remove: function () {
            this.undelegateEvents();
        }
    });
})();
