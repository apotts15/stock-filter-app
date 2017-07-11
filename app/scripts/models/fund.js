/*global OnePebbleApp, Backbone*/

OnePebbleApp.Models = OnePebbleApp.Models || {};

(function () {
    'use strict';

    OnePebbleApp.Models.Fund = Backbone.Model.extend({

        initialize: function () {
        },

        url: '/fund/:id',

        defaults: {
            _id: '',
            name: '',
            fund_type: '',
            net_assets: '',
            series_name: '',
            symbol: '',
            startDate: '',
            fundFamily: ''
        },

        validate: function (attrs, options) {
        },

        parse: function (response, options) {
            this.set({
                _id: response._id,
                name: response.name,
                fund_type: response.fund_type,
                net_assets: response.net_assets,
                series_name: response.series_name,
                symbol: response.symbol,
                startDate: response.startDate,
                fundFamily: response.fundFamily
            });
            return response;
        }
    });

})();
