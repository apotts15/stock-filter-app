/*global OnePebbleApp, Backbone, JST*/

OnePebbleApp.Views = OnePebbleApp.Views || {};

(function () {
    'use strict';
    OnePebbleApp.Views.Questions = Backbone.View.extend({
        template: JST['app/scripts/templates/questions.ejs'],
        tagName: 'div',
        className: '',
        events: {
            "click .next" : "next",
            "click .previous" : "previous",
            "click .exit" : "exit",
            "click .index" : "index",
            "click .submit" : "submit",
            'click .questionnaire-answers input': "updatePreference"
        },

        goToFunds: function(e, queryParams) {
            if(queryParams) {
                Backbone.history.navigate('funds/all?' + queryParams, {trigger:true});
            } else {
                Backbone.history.navigate('funds/all', {trigger:true});
            }
        },

        goToLogin: function(e, queryParams) {
            Cookies.remove('OPAuth');
            Backbone.history.navigate('/', {trigger: true});
        },

        next: function(e) {
            //this.updatePreference(e);
            $('.carousel').carousel('next');
        },

        previous: function() {
            // Previous slide
            $('.carousel').carousel('prev');
        },

        exit: function(e) {
            this.goToLogin(e);
        },

        index: function() {
            Backbone.history.navigate('index/all', {trigger: true});
        },

        submit: function(e) {
            //this.updatePreference(e);
            var url = document.location.href.split('?');
            var queryParams = null;

            if (url.length > 1) {
                queryParams = url[1];
            }

            this.goToFunds(e, queryParams);
        },

        updatePreference: function(e) {
            var answer = $(e.target).val() || $(e.target).data("id");
            var pref = answer.split('-')[0];
            var cat = answer.split('-')[1];
            this.insertParam(cat, pref);
        },

        initialize: function (obj) {
            this.question =  {
                number: obj.question
            }
            //document.location.href += '?guns=indeterminate&gambling=indeterminate&pornography=indeterminate&alcohol=indeterminate&fossil=indeterminate&tobacco=indeterminate';
        },

        getQuestionData: function() {
          return [
              {
                  number: 'one',
                  numeric_num: 1,
                  icon: 'Gun',
                  category: 'guns-ammo',
                  question: 'I wish to <span class=\"bold\">divest (exclude from my portfolio)</span> companies involved in the manufacturing or selling of <span class="bold">guns and/or ammo</span>.',
                  answers: ['yes', 'no']
              },
              {
                  number: 'two',
                  numeric_num: 2,
                  icon: 'Smoking',
                  category: 'tobacco',
                  question: 'I wish to <span class="bold">divest (exclude from my portfolio)</span> companies involved in the manufacturing or selling of <span class="bold">tobacco</span>.',
                  answers: ['yes', 'no']
              },
              {
                  number: 'three',
                  numeric_num: 3,
                  icon: 'Porn-Folder',
                  category: 'pornography',
                  question: 'I wish to <span class="bold">divest (exclude from my portfolio)</span> companies involved in the production or selling of <span class="bold">pornography</span>.',
                  answers: ['yes', 'no']
              },
              {
                  number: 'four',
                  numeric_num: 4,
                  icon: 'Oil-Industry',
                  category: 'fossil',
                  question: 'I wish to <span class="bold">divest (exclude from my portfolio)</span> companies involved in the production or selling of <span class="bold">fossil fuel</span>.',
                  answers: ['yes', 'no']
              },
              {
                  number: 'five',
                  numeric_num: 5,
                  icon: 'Beer',
                  category: 'alcohol',
                  question: 'I wish to <span class="bold">divest (exclude from my portfolio)</span> companies involved in the production or selling of <span class="bold">alcohol</span>.',
                  answers: ['yes', 'no']
              },
              {
                  number: 'six',
                  numeric_num: 6,
                  icon: 'Slot-Machine',
                  category: 'gambling',
                  question: 'I wish to <span class="bold">divest (exclude from my portfolio)</span> companies involved in the production or selling of <span class="bold">gambling</span>.',
                  answers: ['yes', 'no']
              }
          ]
        },

        render: function () {
            this.$el.html(this.template({questions: this.getQuestionData()}));
            $('main').html(this.$el.html());

            if (!Vel.State.isMobile) {
                $('.carousel.carousel-slider').carousel({fullWidth: true});
            } else {
                document.getElementsByTagName('body')[0].classList.add('mobile');
                $('#questionnaire').removeClass('carousel').removeClass(' carousel-slider');
            }

            this.trigger("render", "Questionnaire ender done!");
            return this;
        },

        toggleAnimation: function() {
            $('.active').fadeIn('fast');
            $('.carousel-item:not(.active)').fadeOut('fast');
        },

        updateProgressBar: function() {
            //$('.determinate').css('width', '' )
        },

        tooltip: function() {
            $('.tip').tipr();
        },

        remove: function () {
            this.undelegateEvents();
        },

        /* updated insertParam function */
        insertParam: function (key, value) {
            var url = document.location.href.split('?');
            var keyValuePair = [];
            var key = encodeURI(key);
            var value = encodeURI(value);
            var kvArr;
            var kvpLen;

            if (url.length > 1) {
                keyValuePair = url[1].split('&');
            }

            kvpLen = keyValuePair.length;

            while(kvpLen--) {
                kvArr = keyValuePair[kvpLen].split('=');

                if (kvArr[0] == key) {
                    kvArr[1] = value;
                    keyValuePair[kvpLen] = kvArr.join('=');
                    break;
                }
            }

            if (kvpLen < 0) {
                keyValuePair[keyValuePair.length] = [key,value].join('=');
            }

            document.location.href = url[0] + '?' + keyValuePair.join('&');
        }
    });
})();
