/* global StockFilterApp, Backbone, JST */

StockFilterApp.Views = StockFilterApp.Views || {};

(function () {
    'use strict';
    StockFilterApp.Views.Search = Backbone.View.extend({
        template: JST['app/scripts/templates/search.ejs'],
        tagName: 'form',
        collection: new StockFilterApp.Collections.Searches(),
        className: '',
        ENTER_KEY: 13,
        events: {
            'keyup': 'keyAction',
            "click .close": "clearSearch"
            //"click .input-field": 'clickAction'
        },

        cachedTickers: {},

        keyAction: function(e) {
            this.showDD();
            var $target = $(e.target);
            if (e.which === this.ENTER_KEY) {
                console.log('I hit enter!');
                if (e && e.target && e.target.value) {
                    this.goToFund(e.target.value);
                }
            } else {
                if ($target && $target.hasClass('autocomplete') ) {
                    if ($target) {
                        this.typeahead($target.val());
                    }
                }
            }
        },

        clickAction: function(item) {
            // var $target = $(e.target);
            //
            var type = this.getType(item);

            if (item) {
                //if (type === 'etf') {
                    this.goToFund();
                //} else if (type === 'company') {
                // this.goToFundList();
                //}
            }
            //
                // if (type === 'etf') {
                // this.goToFund();
                // }
                // else {
                //     this.goToFundList();
                // }

        },

        getType: function() {
            for (var prop in this.cachedTickers) {
                if (this.cachedTickers.hasOwnProperty(prop)) {
                    if (this.cachedTickers[prop].ticker === this.getSymbol()) {
                        //console.log(this.cachedTickers[prop])
                        console.log('type', this.cachedTickers[prop].ticker + ' - ' + this.cachedTickers[prop].type);
                        //console.log(this.cachedTickers[prop].name)
                        return this.cachedTickers[prop].type
                    }
                }
            }
        },

        getSymbol: function() {
            var $autocompleteVal = $('.autocomplete').val();
            var symbol = $autocompleteVal.split(" - ");

            if (symbol.length !== 0){
                symbol = symbol[0];

            } else {
                return
            }
            return symbol;
        },

        goToFund: function() {
            this.dimResults();
            var symbol = this.getSymbol();

            Backbone.history.navigate('fund/' + symbol, {trigger:true});
        },

        goToFundList: function() {

            var symbol = this.getSymbol();

            Backbone.history.navigate('funds/company/' + symbol, {trigger:true});
        },

        dimResults: function() {
            $('.cards-col').css({opacity: .5});
        },

        initialize: function (obj) {
            this.enableBrand = obj.enableBrand;
        },

        render: function () {
            this.$el.html(this.template({ enableBrand: this.enableBrand }));
            this.trigger("render", "Search render done!");

            this.typeahead();

            return this;
        },

        typeahead: function(id) {
            //console.log('typing!');
            //Autocomplete
            var fundsArr;
            if(window.fundArray) {
                fundsArr = window.fundArray;
            }
            var that = this;

            if (!id) {
              return false;
            }

            $.ajax({
                type: 'GET',
                url: '/search/' + id,
                success: function(response) {

                    if (!fundsArr) {
                        fundsArr = response;
                        _.extend(that.cachedTickers, response);
                    }
                    var stocks = {};
                    for (var i = 0; i < fundsArr.length; i++) {
                        //console.log(countryArray[i].name);
                        stocks[fundsArr[i].ticker + " - " + fundsArr[i].name] = "/images/" + fundsArr[i].type + ".png";
                    }

                    $('.autocomplete-content:not(:last)').remove();
                    $('input.autocomplete').autocomplete({
                        onAutocomplete: function(item) {
                            that.clickAction(item);
                        },
                        data: stocks,
                        cacheable: true,
                        limit: 30 // The max amount of results that can be shown at once. Default: Infinity.
                    })

                }
            });
        },

        clearSearch: function () {
            $('input.autocomplete').val('');
            this.hideDD();
        },

        showDD: function() {
            $('.dropdown-content').show();

        },

        hideDD: function() {
          $('.dropdown-content').hide();
        },

        remove: function () {
            this.undelegateEvents();
        }
    });
})();
