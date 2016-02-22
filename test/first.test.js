var should = require('should');
var supertest = require('supertest');
var app = require('../app/server');

describe('test api', function () {
	it('should return 200', function (done) {
		supertest(app)
			.get('/echo/1')
			.expect(200)
			.end(function (err, res) {
				(res.status).should.be.equal(200);
				done();
			});
	});

	it('should return 200 with echo value', function (done) {
		var echoValue = 'hi';
		supertest(app)
			.get('/echo/' + echoValue)
			.expect(200)
			.end(function (err, res) {
				(res.status).should.be.equal(200);
				(res.body.echo).should.be.equal(echoValue);
				done();
			});
	});
});
