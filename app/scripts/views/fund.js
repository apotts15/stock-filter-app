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
            "dblclick": "clickit",
            "click .card": "goToFund",
            "click .see-alt-funds": "goToFunds"
        },

        goToFund: function(e) {
            var ticker = this.getTicker(e);
            if (!ticker) {
                return false;
            }
            Backbone.history.navigate('fund/' + ticker, {trigger:true});
        },

        goToFunds: function(e) {
            Backbone.history.navigate('funds/all', {trigger:true});
        },

        getTicker: function(e) {
            var ticker = e && $(e.currentTarget).data('id');

            if (!ticker){
                var url = window.location.href.split('#fund/');
                ticker = url && url[1];
            }
            return ticker;
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
            this.$el.html(this.template({iconSet: this.iconSet, ticker: this.getTicker(), fund: this.model.toJSON()}));
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
