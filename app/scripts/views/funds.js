/*global StockFilterApp, Backbone, JST*/

StockFilterApp.Views = StockFilterApp.Views || {};

(function () {
    'use strict';
    StockFilterApp.Views.Funds = Backbone.View.extend({
        template: JST['app/scripts/templates/funds.ejs'],
        tagName: 'div',
        model: StockFilterApp.Models.Fund,
        collection: StockFilterApp.Collections.Funds,
        className: '',
        MENU_TOGGLED: false,
        events: {
            "click .sidenav-close": "clearSearch",
            "click .card" : "goToFund",
            "click .sidenav-close" : "closeNav",
            "click .drag-target" : "closeNav",
            "click .closed": "openNav",
            "click .ticker-container" : "clickit",
            "click .clear-all-filters": "clearAllFilters",
            "click .toggle-cards": "toggleCards"
        },

        toggleCards: function(e) {
            this.insertParam()
            $('.card').find('.activator').click()
        },

        clearAllFilters: function () {
            var url = document.location.href.split('?');
            document.location.href = url[0];
        },

        openNav: function(e) {
            if($(e.target).hasClass('menu')){
                console.log('Open clicked');
                $('#slide-out').show().addClass('open').removeClass('closed');
                $('.button-collapse').sideNav('show');
            }
        },

        closeNav: function () {
            console.log('Close clicked');
            $('.button-collapse').sideNav('hide');
            $('.button-collapse').sideNav('destroy');
            $('#slide-out').hide();
            this.MENU_TOGGLED = false;
        },

        getTicker: function(e) {
            var ticker = $(e.currentTarget).data('id');

            if (!ticker){
                return false;
            }
            return ticker;
        },

        goToFund: function(e) {
            var ticker = this.getTicker(e);
            var toggleMetal = $(e.target).hasClass('activator') || $(e.target).hasClass('close');

            if (!ticker) {
                return false;
            }

            var url = document.location.href.split('?');
            var queryParams = url[1] ? '?' + url[1] : '';
            if (!toggleMetal) {
                Backbone.history.navigate('fund/' + ticker + queryParams, {trigger:true});
            }
        },

        getSinStocks: function(sin) {
            return this.model.getSinStocks(sin);
        },

        getAllocations: function(tickers) {
            return this.model.getAllocations(tickers);
        },

        getAllocationNumTotal: function(allocations) {
            return this.model.getAllocationNumTotal(allocations);
        },

        getAllocationPercentTotal: function(num) {
            return this.model.getAllocationPercentTotal(num);
        },

        getAUM: function() {
            return this.model.get('fundBasics').aum.value || null
        },

        getAUMFormated: function() {
            var num = this.getAUM();
            if (!num) {
                return 'fund ';
            }
            return this.model.getFormated(num);
        },

        initialize: function (collection) {
            var id = arguments[0].id;
            this.qp = document.location.href.split('?')[1] || null;

            if (collection instanceof this.collection) {
                this.collection = collection;
            } else {
                this.collection = new this.collection(id);
                this.collection.params = collection.params;
                var params = $.param(collection.params);
                this.collection.fetch({
                    beforeSend: function (xhr) {
                    },
                    reset: true,
                    data: params,
                    complete: function () {
                      //  this.unDimResults();
                    }
                });
            }

            this.listenTo(this.collection, 'reset', this.render);
            this.listenTo(this.collection, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template({
                funds: this.collection.toJSON(),
                searchId: this.id,
                filter: this.collection.params,
                companyName: window.company,
                iconSet: this.iconSet
            }));

            $('main').html(this.$el.html());
            if (Object.keys(this.collection.params).length === 0) {
                $(window).scrollTop(0);
            }
            this.typeahead();
            this.selectInit();

            this.filter(this.collection.params);

            this.trigger("render", "Funds render done!");
            $('.button-collapse').sideNav({
                    menuWidth: 300,
                    edge: 'left' // Choose the horizontal origin
                }
            );

            this.unDimResults();
            return this;
        },

        selectInit: function() {
            var $catSelect = $('#category-dd');
            var $focusSelect = $('#focus-dd');
            var $nicheSelect = $('#niche-dd');
            var $brandSelect = $('#brand-dd');
            var $gunsCheck = $('#guns-check');
            var $gamblingCheck = $('#gambling-check');
            var $pornCheck = $('#porn-check');
            var $tobaccoCheck = $('#tobacco-check');
            var $ffCheck = $('#ff-check');
            var $alcoholCheck = $('#alcohol-check');
            var that = this;

            $catSelect.material_select();

            var url = document.location.href.split('?');
            var qp = url[1] ? this.parseQueryString(url[1]) : null;
            if(qp) {
                if (qp['category']) {
                    $catSelect.val(qp['category']);
                }
                if (qp['focus']) {
                    $focusSelect.val(qp['focus']);
                }
                if (qp['niche']) {
                    $nicheSelect.val(qp['niche']);
                }
                if (qp['brand']) {
                    $brandSelect.val(qp['brand']);
                }

                if (qp['guns'] && (qp['guns'] === 'no' || qp['guns'] === 'indeterminate')) {
                    that.dimResults();
                    $gunsCheck.attr('checked', 'checked');
                    $gunsCheck.parent().addClass('checked');
                }

                if (qp['gambling'] && (qp['gambling'] === 'no' || qp['gambling'] === 'indeterminate')) {
                    $gamblingCheck.attr('checked', 'checked');
                    $gamblingCheck.parent().addClass('checked');
                }

                if (qp['pornography'] && (qp['pornography'] === 'no' || qp['pornography'] === 'indeterminate')) {
                    $pornCheck.attr('checked', 'checked');
                    $pornCheck.parent().addClass('checked');
                }

                if (qp['fossil'] && (qp['fossil'] === 'no' || qp['fossil'] === 'indeterminate')) {
                    $ffCheck.attr('checked', 'checked');
                    $ffCheck.parent().addClass('checked');
                }

                if (qp['tobacco'] && (qp['tobacco'] === 'no' || qp['tobacco'] === 'indeterminate')) {
                    $tobaccoCheck.attr('checked', 'checked');
                    $tobaccoCheck.parent().addClass('checked');
                }

                if (qp['alcohol'] && (qp['alcohol'] === 'no' || qp['alcohol'] === 'indeterminate')) {
                    $alcoholCheck.attr('checked', 'checked');
                    $alcoholCheck.parent().addClass('checked');
                }
            }

            $catSelect.material_select();
            $focusSelect.material_select();
            $nicheSelect.material_select();
            $brandSelect.material_select();
        },

        filterRangeMaxMin: {
            'fundSize_min': 0,
            'fundSize_max': 250000000000,
            'expense_min': 0,
            'expense_max': 300,
            'returns_min': -0.0021, //-0.002097
            'returns_max': 0.7802, //0.780195
            'dividend_min': 0,
            'dividend_max': 0.3106 //0.310594
        },

        setFilterRanges: function(params) {
            var filterRanges = {
                'fundSize_min': params['fundSize_min'] || this.filterRangeMaxMin['fundSize_min'],
                'fundSize_max': params['fundSize_max'] || this.filterRangeMaxMin['fundSize_max'],
                'expense_min': params['expense_min'] || this.filterRangeMaxMin['expense_min'],
                'expense_max': params['expense_max'] || this.filterRangeMaxMin['expense_max'],
                'returns_min': params['returns_min'] || this.filterRangeMaxMin['returns_min'],
                'returns_max': params['returns_max'] || this.filterRangeMaxMin['returns_max'],
                'dividend_min': params['dividend_min'] || this.filterRangeMaxMin['dividend_min'],
                'dividend_max': params['dividend_max'] || this.filterRangeMaxMin['dividend_max']
            };
            return filterRanges;
        },

        filter: function(params) {
            var $gunsCheck = $('#guns-check');
            var $gamblingCheck = $('#gambling-check');
            var $pornCheck = $('#porn-check');
            var $tobaccoCheck = $('#tobacco-check');
            var $ffCheck = $('#ff-check');
            var $alcoholCheck = $('#alcohol-check');
            var fundSizeSlider = document.getElementById('fund-size-slider');
            var fundCategoryDD = document.getElementById('category-dd');
            var focusDD = document.getElementById('focus-dd');
            var nicheDD = document.getElementById('niche-dd');
            var brandDD = document.getElementById('brand-dd');
            var expenseSlider = document.getElementById('expense-slider');
            var returnsSlider = document.getElementById('returns-slider');
            var dividendSlider = document.getElementById('dividend-slider');
            //var risksSlider = document.getElementById('risks-slider');
            var that = this;

            var filterRanges = this.setFilterRanges(params);

            var moneyFormat = wNumb({
                mark: '.',
                thousand: ',',
                prefix: '$ '
            });

            // Fund Size - fundSizeSlider
            noUiSlider.create(fundSizeSlider, {
                start: [filterRanges.fundSize_min, filterRanges.fundSize_max],
                connect: true,
                orientation: 'horizontal', // 'horizontal' or 'vertical'
                range: {
                    'min': 0,
                    '20%': 11563499,
                    '40%': 61229739,
                    '60%': 252517086,
                    '80%': 1111881807,
                    'max': 250000000000
                },
                format: wNumb({
                    decimals: 2
                })
            });

            var fundSizeValues = [
                document.getElementById('fund-size-lower'),
                document.getElementById('fund-size-upper')
            ];

            $gunsCheck.on('change', function(e) {
                that.dimResults();
                var value = e.target.checked ? 'no' : 'yes';
                if (value === 'no') {
                    $gunsCheck.parent().addClass('checked');
                } else {
                    $gunsCheck.parent().removeClass('checked');
                }
                that.filterResults([value], 'guns', false);
            });
            $gamblingCheck.on('change', function(e) {
                that.dimResults();
                var value = e.target.checked ? 'no' : 'yes';
                if (value === 'no') {
                    $gamblingCheck.parent().addClass('checked');
                } else {
                    $gamblingCheck.parent().removeClass('checked');
                }
                that.filterResults([value], 'gambling', false);
            });
            $pornCheck.on('change', function(e) {
                that.dimResults();
                var value = e.target.checked ? 'no' : 'yes';
                if (value === 'no') {
                    $pornCheck.parent().addClass('checked');
                } else {
                    $pornCheck.parent().removeClass('checked');
                }
                that.filterResults([value], 'pornography', false);
            });
            $ffCheck.on('change', function(e) {
                that.dimResults();
                var value = e.target.checked ? 'no' : 'yes';
                if (value === 'no') {
                    $ffCheck.parent().addClass('checked');
                } else {
                    $ffCheck.parent().removeClass('checked');
                }
                that.filterResults([value], 'fossil', false);
            });
            $tobaccoCheck.on('change', function(e) {
                that.dimResults();
                var value = e.target.checked ? 'no' : 'yes';
                if (value === 'no') {
                    $tobaccoCheck.parent().addClass('checked');
                } else {
                    $tobaccoCheck.parent().removeClass('checked');
                }
                that.filterResults([value], 'tobacco', false);
            });
            $alcoholCheck.on('change', function(e) {
                that.dimResults();
                var value = e.target.checked ? 'no' : 'yes';
                if (value === 'no') {
                    $alcoholCheck.parent().addClass('checked');
                } else {
                    $alcoholCheck.parent().removeClass('checked');
                }
                that.filterResults([value], 'alcohol', false);
            });

            fundSizeSlider.noUiSlider.on('update', function( values, handle ) {
                fundSizeValues[handle].innerHTML = moneyFormat.to(parseInt(values[handle], 10));
            });

            //fundSizeSlider.noUiSlider.on('update', this.filterResults.bind(this));
            fundSizeSlider.noUiSlider.on('update', function(args) {
                if (args[0] == that.filterRangeMaxMin['fundSize_min'] && args[1] == that.filterRangeMaxMin['fundSize_max'] ) {
                    return false;
                }

                that.dimResults();
                that.filterResults(args, 'fundSize', true);
            });

            // Fund Category DD - fundCategoryDD
            $(fundCategoryDD).on('change', function(e) {
                that.dimResults();
                that.filterResults([e.currentTarget.value], 'category', false);
            });

            // Focus DD - focusDD
            $(focusDD).on('change', function(e) {
                that.dimResults();
                that.filterResults([e.currentTarget.value], 'focus', false);
            });

            // niche DD - nicheDD
            $(nicheDD).on('change', function(e) {
                that.dimResults();
                that.filterResults([e.currentTarget.value], 'niche', false);
            });

            // brand DD - brandDD
            $(brandDD).on('change', function(e) {
                that.dimResults();
                that.filterResults([e.currentTarget.value], 'brand', false);
            });

            // Expenses - expensesSlider
            noUiSlider.create(expenseSlider, {
                start: [filterRanges.expense_min, filterRanges.expense_max],
                connect: true,
                orientation: 'horizontal', // 'horizontal' or 'vertical'
                range: {
                    'min': 0,
                    '20%': 24,
                    '40%': 52,
                    '60%': 84,
                    '80%': 129,
                    'max': 300
                },
                format: wNumb({
                    decimals: 2
                })
            });

            var expenseValues = [
                document.getElementById('expense-lower'),
                document.getElementById('expense-upper')
            ];

            expenseSlider.noUiSlider.on('update', function( values, handle ) {
                expenseValues[handle].innerHTML = parseInt(values[handle], 10) / 100 + '%';
            });
            expenseSlider.noUiSlider.on('update', function(args) {
                if (args[0] == that.filterRangeMaxMin['expense_min'] && args[1] == that.filterRangeMaxMin['expense_max'] ) {
                    return false;
                }

                that.dimResults();
                that.filterResults(args, 'expense', true);
            });

            // 5Yr return - returnSlider
            noUiSlider.create(returnsSlider, {
                start: [filterRanges.returns_min, filterRanges.returns_max],
                connect: true,
                orientation: 'horizontal', // 'horizontal' or 'vertical'
                range: {
                    'min': -0.002097,
                    '20%': 0.004831,
                    '40%': 0.086794,
                    '60%': 0.14432,
                    '80%': 0.161686,
                    'max': 0.780195
                },
                format: wNumb({
                    decimals: 4
                })
            });

            var returnsValues = [
                document.getElementById('returns-lower'),
                document.getElementById('returns-upper')
            ];

            returnsSlider.noUiSlider.on('update', function( values, handle ) {
                returnsValues[handle].innerHTML = (values[handle] * 100).toFixed(2) + '%';
            });

            returnsSlider.noUiSlider.on('update', function(args) {
                if (args[0] == that.filterRangeMaxMin['returns_min'] && args[1] == that.filterRangeMaxMin['returns_max'] ) {
                    return false;
                }

                that.dimResults();
                that.filterResults(args, 'returns', true);
            });

            // dividend dividendSlider
            noUiSlider.create(dividendSlider, {
                start: [filterRanges.dividend_min, filterRanges.dividend_max],
                connect: true,
                orientation: 'horizontal', // 'horizontal' or 'vertical'
                range: {
                    'min': 0,
                    '20%': 0.009238,
                    '40%': 0.014383,
                    '60%': 0.01965,
                    '80%': 0.031227,
                    'max': 0.310594
                },
                format: wNumb({
                    decimals: 4
                })
            });

            var dividendValues = [
                document.getElementById('dividend-lower'),
                document.getElementById('dividend-upper')
            ];

            dividendSlider.noUiSlider.on('update', function( values, handle ) {
                dividendValues[handle].innerHTML = (values[handle] * 100).toFixed(2) + '%';
            });

            dividendSlider.noUiSlider.on('update', function(args) {
                if (args[0] == that.filterRangeMaxMin['dividend_min'] && args[1] == that.filterRangeMaxMin['dividend_max'] ) {
                    return false;
                }

                that.dimResults();
                that.filterResults(args, 'dividend', true);
            });
        },

        filterResults: _.debounce(function (values, key, range) {
            //?expensesRange_max=1.93&expensesRange_min=0.83&gunCategories=all&gunStockRange_max=3.44&gunStockRange_min=0.29&page=1
            var new_qp;
            var keys = {};
            var url = document.location.href.split('?');
            var old_qp = url[1] ? this.parseQueryString(url[1]) : null;
            var qp_arr;
            var final_qp;
            var filterRanges = this.setFilterRanges([]);
            //console.log(values, key, range);

            if (!old_qp) {
                if (range && filterRanges[key + '_min'].toFixed(4) === parseFloat(values[0]).toFixed(4) && filterRanges[key + '_max'].toFixed(4) === parseFloat(values[1]).toFixed(4)) {
                    return;
                } else if (filterRanges[key] === values[0]) {
                    return;
                }
            }

            if (range) {
                keys[key + '_min'] = values[0];
                keys[key + '_max'] = values[1];
            } else {
                keys[key] = values[0];
            }

            _.each(keys, function(val, k) {
                new_qp += this.insertParam(k, val);
            },this);

            qp_arr = new_qp.split('&');
            qp_arr.shift();
            new_qp = qp_arr.join('&');
            new_qp = this.parseQueryString(new_qp);

            if (old_qp) {
                _.each(new_qp, function(val, k) {
                    old_qp[k] = new_qp[k]
                },this);
                final_qp = old_qp;
            } else {
                final_qp = new_qp;
            }
            final_qp = this.serializeQueryObject(final_qp);

            document.location.href = url[0] + '?' + final_qp;
        }, 300),

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

        iconSet: {
            'Taxable Money Market': 'attach_money',
            'Unknown Category': 'battery_unknown',
            'Nontraditional Bond': 'multiline_chart',
            'Retirement Target Portfolio': 'pie_chart',
            'U.S. Large Blend': 'equalizer',
            'U.S. Mid-Cap Blend': 'insert_chart',
            'U.S. Small Blend': 'bubble_chart',
            'Aggressive Allocation Portfolio': 'trending_up',
            'Foreign Large Growth': 'multiline_chart',
            'default': 'pie_chart_outlined'
        },

        parseQueryString: function(queryString){
            //var queryString = document.location.href.split('?')[1];
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

        serializeQueryObject: function(obj, prefix) {
            var str = [], p;
            for(p in obj) {
                if (obj.hasOwnProperty(p)) {
                    var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                    str.push((v !== null && typeof v === "object") ?
                        this.serializeQueryObject(v, k) :
                        encodeURIComponent(k) + "=" + encodeURIComponent(v));
                }
            }
            return str.join("&");
        },

        getParameterByName: function(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },

        typeahead: function() {
            var searchView = new StockFilterApp.Views.Search({
                el: $('.nav-wrapper'),
                enableBrand: false
            });
            searchView.render();
        },

        remove: function () {
            this.undelegateEvents();
        },

        dimResults: function() {
            $('.filter #spinner').show();
            $('.cards-col').css({opacity: .5});
        },

        unDimResults: function() {
            $('.filter #spinner').hide();
            $('.cards-col').css({opacity: 1});
        }
    });
})();
