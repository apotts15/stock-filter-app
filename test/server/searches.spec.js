'use strict';
//test your express server RESTful
var app = require('../../server/app.js');
var request=require('supertest');
var chai = require('chai');
// Load Chai assertions
global.expect = chai.expect;

describe('Searches RESTful API:', function() {
    var newSearches,
        expressServerApp=request(app);
    describe('GET /searches', function() {
        var data;
        before(function(done) {
            expressServerApp
                .get('/searches')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function(err, res){
                    if (err) {
                        return done(err);
                    }
                    data = res.body;
                    done();
                });
        });
        it('should respond with JSON array', function() {
            expect(data).to.have.property("msg");
            expect(data.msg).to.be.instanceOf(Array);
        });
    });
});
