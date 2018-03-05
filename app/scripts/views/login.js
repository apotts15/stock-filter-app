/*global StockFilterApp, Backbone, JST*/

StockFilterApp.Views = StockFilterApp.Views || {};

(function () {
    'use strict';
    StockFilterApp.Views.Login = Backbone.View.extend({
        template: JST['app/scripts/templates/login.ejs'],
        tagName: 'form',
        className: '',
        ENTER_KEY: 13,
        events: {
            'keyup': 'enterPassword',
            'click .password-enter': 'enterPassword',
            'submit form': 'enterPassword'
        },

        enterPassword: function(e) {
            $('#password').removeClass('invalid');
            $('.password .op-input').removeClass('shake');
            var $target = $(e.target);
            // Password by "Enter"
            var enterPasswordAction = e.which === this.ENTER_KEY;
            e.preventDefault();

            if (enterPasswordAction || $target.hasClass('password-enter')) {
                this.passwordValidate(e);
            }
        },

        passwordValidate: function(e) {
            var $target = $(e.target);
            var $val =  $('#password').val();

            if ($val && $val.trim().length > 0) {
                //console.log('I hit enter and a password was provided', $target);
                this.doPasswordCheck($val);
            } else {
                //console.log('I hit enter but no password, prevented', $target);
                e.preventDefault();
            }
        },

        doPasswordCheck: function(val) {
            if (val.toLocaleString() === 'wegivehope') {
                //console.log('The password matches!', val);
                this.setAuthCookie();
                this.goToNext();
            } else {
                $('#password').addClass('invalid').val('');
                $('.password .op-input').addClass('shake');
                //console.log('The password does not match!');
            }
        },

        setAuthCookie: function() {
            var date = new Date();
            var minutes = 90;
            //var minutes = .1;
            var time = minutes * 60 * 1000;
            date.setTime(date.getTime() + (time));

            setTimeout(_.bind(this.timerExpiration, this), time);
            Cookies.set('OPAuth', true, {
                // uncomment out for prod
                // domain: 'demo.website.com',
                expires: date
            });
        },

        insertParam: function (key, value) {
            key = encodeURI(key);
            value = encodeURI(value);

            var keyValuePair = document.location.search.substr(1).split('&');

            var i = keyValuePair.length;
            var x;
            while(i--) {
                x = keyValuePair[i].split('=');

                if (x[0] == key) {
                    x[1] = value;
                    keyValuePair[i] = x.join('=');
                    break;
                }
            }

            if (i < 0) {
                keyValuePair[keyValuePair.length] = [key,value].join('=');
            }

            return keyValuePair.join('&');
        },

        timerExpiration: function() {
            console.log('cookie expired');
            Backbone.history.navigate('/', {trigger: true});
        },

        goToNext: function() {
            Backbone.history.navigate('#questionnaire/?guns=indeterminate&tobacco=indeterminate&pornography=indeterminate&fossil=indeterminate&alcohol=indeterminate&gambling=indeterminate', {trigger: true});
            this.remove();
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
                    function(o){
                        _.extend(params,o);
                    }
                );
            }
            return params;
        },

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template({ enableBrand: this.enableBrand }));
            this.trigger("render", "Login render done!");

            $('.category-animation').wodry({
                animation: 'rotateX',
                delay: 1000,
                animationDuration: 800
            }).show();

            $('.no-category-animation').hide();

            return this;
        },

        clear: function () {
            $('input.autocomplete').val('');
            this.hideDD();
        },

        remove: function () {
            this.undelegateEvents();
        }
    });
})();
