/*global OnePebbleApp, Backbone, JST*/

OnePebbleApp.Views = OnePebbleApp.Views || {};

(function () {
    'use strict';
    OnePebbleApp.Views.Search = Backbone.View.extend({
        template: JST['app/scripts/templates/search.ejs'],
        tagName: 'form',
        collection: new OnePebbleApp.Collections.Searches(),
        className: '',
        ENTER_KEY: 13,
        events: {
            'keyup': 'keyAction',
            "click .close": "clearSearch",
            'click': 'clickAction'
        },

        keyAction: function(e) {
            this.showDD();
            var $target = $(e.target);
            if (e.which === this.ENTER_KEY) {
                console.log('I hit enter!');
                if (e && e.target && e.target.value) {
                    this.goToFund(e.target.value);
                }
            } else {
                if($target && $target.hasClass('autocomplete') ) {
                    if ($target) {
                        this.typeahead($target.val());
                    }
                }
            }
        },

        clickAction: function(e) {
            var $target = $(e.target);

            var type = this.getType(e);

            if ($target && $target.parent() && $target.parent()[0] && $target.parent()[0].tagName === 'LI') {
                if (type === 'etf') {
                    this.goToFund();
                } else {
                    this.goToFundList();
                }
            }
            //this.hideDD();
        },

        getType: function(e) {
            var $parent = $(e.target).parent();
            var $img = $parent.find('img');
            var type = null;

            if ($img && $img[0]) {
                type = $img[0].src.split('/').pop().split('.png')[0];
            }

            console.log(type);
            return type;
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
            var symbol = this.getSymbol();

            Backbone.history.navigate('fund/' + symbol, {trigger:true});
        },

        goToFundList: function() {
            var symbol = this.getSymbol();

            Backbone.history.navigate('funds/company/' + symbol, {trigger:true});
        },

        initialize: function (obj) {
            this.enableBrand = obj.enableBrand;
        },

        render: function () {
            this.$el.html(this.template({ enableBrand: this.enableBrand }));
            this.trigger("render", "render done!");

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
            $.ajax({
                type: 'GET',
                url: '/search/' + id,
                success: function(response) {

                    if (!fundsArr) {
                        fundsArr = response;
                    }
                    var stocks = {};
                    for (var i = 0; i < fundsArr.length; i++) {
                        //console.log(countryArray[i].name);
                        stocks[fundsArr[i].ticker + " - " + fundsArr[i].name] = "/images/" + fundsArr[i].type + ".png";
                    }

                    $('.autocomplete-content:not(:last)').remove();
                    $('input.autocomplete').autocomplete({
                        data: stocks,
                        limit: 30 // The max amount of results that can be shown at once. Default: Infinity.
                    });
                    // remove duplicated
                    //
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
