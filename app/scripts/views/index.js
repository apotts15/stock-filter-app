/*global OnePebbleApp, Backbone, JST*/

OnePebbleApp.Views = OnePebbleApp.Views || {};

(function () {
    'use strict';
    OnePebbleApp.Views.Index = Backbone.View.extend({
        template: JST['app/scripts/templates/index.ejs'],
        tagName: 'div',
        model: OnePebbleApp.Models.Index,
        collection: OnePebbleApp.Collections.Index,
        className: '',
        events: {},
        slyFrame: null,

        initialize: function () {
            this.model = new this.model();
        },

        render: function () {
            console.log('render index');
            this.$el.html(this.template({
                SDGs: this.model.getSDGs()
            }));

            $('main').html(this.$el.html());

            // -------------------------------------------------------------
            //   Force Centered Navigation
            // -------------------------------------------------------------
            if (!this.slyFrame) {
                var $frame = $('#forcecentered');
                var $wrap  = $frame.parent();

                // Call Sly on frame
                this.slyFrame = $frame.sly({
                    horizontal: 1,
                    itemNav: 'forceCentered',
                    smart: 1,
                    activateMiddle: 1,
                    activateOn: 'click',
                    mouseDragging: 1,
                    touchDragging: 1,
                    releaseSwing: 1,
                    startAt: 0,
                    scrollBar: $wrap.find('.scrollbar'),
                    scrollBy: 1,
                    speed: 300,
                    elasticBounds: 1,
                    easing: 'easeOutExpo',
                    dragHandle: 1,
                    dynamicHandle: 1,
                    clickBar: 1,

                    // Buttons
                    prev: $wrap.find('.prev'),
                    next: $wrap.find('.next')
                });
            }

            this.trigger("render", "render done!");
            return this;
        }


    });
})();
