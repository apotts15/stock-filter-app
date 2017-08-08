/**
 * Created by songyangpu on 16/2/23.
 */
/*global OnePebbleApp, Backbone*/
OnePebbleApp.Routers = OnePebbleApp.Routers || {};

(function () {
    'use strict';
    OnePebbleApp.Routers.All = Backbone.Router.extend({
        routes: {
            '': 'home',
            'fund/': 'fund',
            'fund/:id': 'fund',
            'funds/': 'funds',
            'funds/company/:id?*queryString' : 'funds',
            'funds/company/:id': 'funds',
            'doctor': 'main'

        },
        initialize: function () {
        },
        home: function() {
            var searchView = new OnePebbleApp.Views.Search({
                el: $('.nav-wrapper')
            });
            searchView.render();
        },
        main: function () {
            new OnePebbleApp.Views.Doctor();
        },
        fund: function (fundId) {
            var fund = new OnePebbleApp.Views.Fund({
                id: fundId,
                el: $('body')
            });
        },

        funds: function(fundId, queryString) {
            var params = queryString ? this.parseQueryString(queryString) : '';

            // if (queryString) {
            //     params = this.parseQueryString(queryString);
            // }

            var funds = new OnePebbleApp.Views.Funds({
                el: $('body'),
                id: fundId,
                params: params
            });
        },

        parseQueryString: function(queryString){
            var params = {};
            if(queryString){
                _.each(
                    _.map(decodeURI(queryString).split(/&/g),function(el,i){
                        var aux = el.split('='), o = {};
                        if(aux.length >= 1){
                            var val = undefined;
                            if(aux.length == 2)
                                val = aux[1];
                            o[aux[0]] = val;
                        }
                        return o;
                    }),
                    function(o){
                        _.extend(params,o);
                    }
                );
            }
            return params;
        },

        showPosts: function (id, queryString) {
            var params = this.parseQueryString(queryString);
        }

    });

    OnePebbleApp.Routers.Router = new OnePebbleApp.Routers.All();
    Backbone.history.start();
})();
