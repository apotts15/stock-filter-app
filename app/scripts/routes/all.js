/**
 * Created by songyangpu on 16/2/23.
 */
/*global StockFilterApp, Backbone*/
StockFilterApp.Routers = StockFilterApp.Routers || {};

(function () {
    'use strict';
    StockFilterApp.Routers.All = Backbone.Router.extend({
        routes: {
            '': 'home',
            '#': 'home',
            '#login': 'home',
            '?*queryString': 'home',
            '#?*queryString': 'home',
            'fund/': 'fund',
            'search/': 'search',
            'fund/:id': 'fund',
            'funds/': 'funds',
            'funds/:id' : 'funds',
            'funds/:id?*queryString' : 'funds',
            'funds/company/:id?*queryString' : 'funds',
            'funds/company/:id': 'funds',
            'questionnaire/': 'questions',
            'questionnaire/?*queryString': 'questions',
            'index/' : 'stgIndex',
            'index/:sdg' : 'sdgIndex'
        },

        IndexView: null,

        initialize: function() {
        },

        sdgIndex: function(sdg) {
            if (!sdg) {
                Backbone.history.navigate('/index/all', {trigger: true});
            }
            console.log('welcome to the SDG Index. Goal: ', sdg);

            var footerView = new StockFilterApp.Views.Footer({
                el: $('body')
            });

            var indexColumnView = new StockFilterApp.Views.IndexColumn({
                el: 'div',
                id: sdg
            });

            if (!this.IndexView) {
                this.IndexView = new StockFilterApp.Views.Index({
                    el: $('body'),
                    id: sdg,
                    indexColumn: indexColumnView,
                    footerView: footerView
                });
                this.IndexView.render();
                footerView.render(sdg);
            }
            indexColumnView.render(sdg);
        },

        validateAuth: function() {
            var authenticated = Cookies.get('OPAuth');

            if (authenticated) {
                console.log('authenticated');
                return true;
            } else {
                console.log('not authenticated');
                return false;
            }
        },

        home: function() {
            var loginView = new StockFilterApp.Views.Login({
                el: $('main')
            });
            loginView.render();
        },
        questions: function(queryParam) {
            if (!this.validateAuth()) {
                Backbone.history.navigate('/', {trigger: true});
            } else {
                if ($('#questionnaire').length === 0) {
                    var questionsView = new StockFilterApp.Views.Questions({
                        el: $('main')
                    });
                    questionsView.render();
                }
            }
        },

        search: function() {
            if(!this.validateAuth()) {
                Backbone.history.navigate('/', {trigger: true});
                return false;
            }

            var searchView = new StockFilterApp.Views.Search({
                el: $('.nav-wrapper')
            });
            searchView.render();
        },

        fund: function (fundId) {
            if(!this.validateAuth()) {
                Backbone.history.navigate('/', {trigger: true});
                return false;
            }

            var fund = new StockFilterApp.Views.Fund({
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

            var funds = new StockFilterApp.Views.Funds({
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
        },

        dimResults: function() {
            $('.cards-col').css({opacity: .5});
        }

    });

    StockFilterApp.Routers.Router = new StockFilterApp.Routers.All();
    Backbone.history.start();
})();
