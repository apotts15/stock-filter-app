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
            'keypress': 'keyAction',
            'click': 'clickAction'
        },

        keyAction: function(e) {
            if (e.which === this.ENTER_KEY) {
                console.log('I hit enter!');
                if (e && e.target && e.target.value) {
                    this.goToFund(e.target.value);
                }
            }
        },

        clickAction: function(e) {
            console.log('I clicked a dd!');
            var $target = $(e.target);
            if ($target && $target .parent()[0].tagName === 'LI') {
                this.goToFund();
            }
        },
        getId: function() {
            return $('.autocomplete').val();
        },
        goToFund: function() {
            Backbone.history.navigate('fund/' + this.getId(), {trigger:true});
        },

        initialize: function (collection) {

        },

        render: function () {
            this.$el.html(this.template());
            this.trigger("render", "render done!");

            this.typeahead();

            return this;
        },

        typeahead: function() {
            //console.log('typing!');
             //Autocomplete
            $.ajax({
                type: 'GET',
                //url: 'https://restcountries.eu/rest/v2/all?fields=name',
                url: '/search/vo',
                success: function(response) {
                    //debugger;
                    var fundArray = response;
                    var funds = {};
                    for (var i = 0; i < fundArray.length; i++) {
                        //console.log(countryArray[i].name);
                        funds[fundArray[i].name] = null; //fundArray[i].flag or null
                    }
                    var autocomplete = $('input.autocomplete').autocomplete({
                        data: funds,
                        limit: 30 // The max amount of results that can be shown at once. Default: Infinity.
                    });

                }
            });
        },
        remove: function () {
            this.undelegateEvents();
        }
    });
})();
