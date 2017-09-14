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
            '#': 'home',
            '?*queryString': 'home',
            '#?*queryString': 'home',
            'fund/': 'fund',
            'search/': 'search',
            'fund/:id': 'fund',
            'funds/': 'funds',
            'funds/company/:id?*queryString' : 'funds',
            'funds/company/:id': 'funds'
        },

        initialize: function() {
        },

        validateAuth: function() {
            var authenticated = Cookies.get('OPAuth');
            console.log('authenticated', authenticated);
            if (authenticated) {
                console.log('authenticated');
                return true;
            } else {
                console.log('not authenticated');
                return false;
            }
        },

        home: function(queryParam) {
            if (this.validateAuth()) {
                var qp = this.parseQueryString(queryParam);
                var url = qp.redirectUrl ? decodeURIComponent(qp.redirectUrl) : 'search/';

                Backbone.history.navigate(url, {trigger: true});
            } else {
                var loginView = new OnePebbleApp.Views.Login({
                    el: $('.nav-wrapper')
                });
                loginView.render();
            }
        },

        search: function() {
            if(!this.validateAuth()) {

                Backbone.history.navigate('/', {trigger: true});
                return false;
            }

            var searchView = new OnePebbleApp.Views.Search({
                el: $('.nav-wrapper')
            });
            searchView.render();
        },

        fund: function (fundId) {
            if(!this.validateAuth()) {
                Backbone.history.navigate('/', {trigger: true});
                return false;
            }

            var fund = new OnePebbleApp.Views.Fund({
                id: fundId,
                el: $('body')
            });
        },

        funds: function(fundId, queryString) {
            if (!this.validateAuth()) {
                Backbone.history.navigate('/', {trigger: true});
                return false;
            }

            var params = queryString ? this.parseQueryString(queryString) : '';

            var funds = new OnePebbleApp.Views.Funds({
                el: $('body'),
                id: fundId,
                params: params
            });
        },

        getQueryParams: function(removeQ) {
            var qp = window.location.search;
            qp = removeQ ? qp.split('?') && qp.split('?')[1] : qp;

            return qp;
        },

        parseQueryString: function(queryString){
            var params = {};
            var locationQP = this.getQueryParams(true);

            var qp = queryString || locationQP;
            if(qp){
                _.each(
                    _.map(decodeURI(qp).split(/&/g),function(el,i){
                        var aux = el.split('='), o = {};
                        if(aux.length >= 1){
                            var val = undefined;
                            if(aux.length == 2)
                                val = aux[1];
                            o[aux[0]] = val;
                        }
                        return o;
                    }),
                    function(o) {
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
