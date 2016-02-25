var expect = require('chai').expect,
	supertest = require('supertest'),
	app = require('../app/server');

describe('test api', function () {
	it('should return 200', function (done) {
		supertest(app)
			.get('/echo/1')
			.expect(200)
			.end(function (err, res) {
				expect(res.status).to.equal(200);
				done();
			});
	});

	it('should return 200 with echo value', function (done) {
		var echoValue = 'hi';
		supertest(app)
			.get('/echo/' + echoValue)
			.expect(200)
			.end(function (err, res) {
				expect(res.status).to.equal(200);
				expect(res.body.echo).to.equal(echoValue);
				done();
			});
	});

	it('should return sum of added numbers', function (done) {
		supertest(app)
			.get('/api/add/1/2')
			.expect(200)
			.end(function (err, res) {
				expect(res.status).to.equal(200);
				expect(res.body.sum).to.equal(3);
				done();
			});
	});

	it('should return sum of added number with negative number', function (done) {
		supertest(app)
			.get('/api/add/-3/2')
			.expect(200)
			.end(function (err, res) {
				expect(res.status).to.equal(200);
				expect(res.body.sum).to.equal(-1);
				done();
			});
	});
});
