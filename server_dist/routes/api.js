/**
 * Main a
    app.use('/searches',require('./../api/searches/index'));pplication routes
 * Don't remove the insertFlag
 */

'use strict';

module.exports = function (app) {
    app.use('/',require('./../api/index'));
    app.use('/fund',require('./../api/fund/index'));
    app.use('/funds',require('./../api/funds/index'));
    app.use('/search',require('./../api/searches/index'));
};
