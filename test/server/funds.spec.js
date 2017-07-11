'use strict';
//test your express server RESTful
var app = require('../../server/app.js');
var request=require('supertest');
var chai = require('chai');
// Load Chai assertions
global.expect = chai.expect;

describe('Funds RESTful API:', function() {
    var newFunds,
        expressServerApp=request(app);
    describe('GET /funds', function() {
        var data;
        before(function(done) {
            expressServerApp
                .get('/funds')
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
