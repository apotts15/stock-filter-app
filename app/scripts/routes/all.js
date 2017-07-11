/**
 * Created by songyangpu on 16/2/23.
 */
/*global OnePebbleApp, Backbone*/
OnePebbleApp.Routers = OnePebbleApp.Routers || {};

(function () {
    'use strict';
    OnePebbleApp.Routers.All = Backbone.Router.extend({
        routes: {
            'fund/': 'fund',
            'fund/:id': 'fund',
            'funds/company/:id': 'fundsWithCompanyExposure',
            'doctor': 'main'

        },
        initialize: function () {
        },

        main: function () {
            new OnePebbleApp.Views.Doctor();
        },
        fund: function (fundId) {
            var funds = new OnePebbleApp.Views.Fund({
                id: fundId,
                el: $('body')
            });
        },
        fundsWithCompanyExposure: function (companyId) {
            new OnePebbleApp.Views.FundsWithCompany(companyId);
        }
    });

    OnePebbleApp.Routers.Router = new OnePebbleApp.Routers.All();
    Backbone.history.start();
})();
