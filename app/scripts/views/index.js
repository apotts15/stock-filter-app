/*global StockFilterApp, Backbone, JST*/

StockFilterApp.Views = StockFilterApp.Views || {};

(function () {
    'use strict';
    StockFilterApp.Views.Index = Backbone.View.extend({
        template: JST['app/scripts/templates/index.ejs'],
        tagName: 'div',
        model: StockFilterApp.Models.Index,
        collection: StockFilterApp.Collections.Index,
        className: '',
        events: {},
        slyFrame: null,

        initialize: function (options) {
            this.model = new this.model();
            this.sdgId = options.id;
        },

        render: function () {
            var slyFrameStartPosition = 0;

            this.$el.html(this.template({
                SDGs: this.model.getSDGs()
            }));

            if (this.sdgId !== 'all') {
                slyFrameStartPosition = parseInt(this.sdgId);
            }

            $('main').html(this.$el.html());

            // -------------------------------------------------------------
            //   Force Centered Navigation
            // -------------------------------------------------------------
            if (!this.slyFrame) {
                var $frame = $('#centered');
                var $wrap  = $frame.parent();

                // Call Sly on frame
                this.slyFrame = $frame.sly({
                    horizontal: 1,
                    itemNav: 'centered',
                    smart: 1,
                    activateMiddle: 1,
                    activateOn: 'click',
                    mouseDragging: 1,
                    touchDragging: 1,
                    releaseSwing: 1,
                    startAt: slyFrameStartPosition,
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

            this.trigger("render", "Index render done!");
            return this;
        }
    });
})();
