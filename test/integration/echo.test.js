var describe = require('mocha/lib/mocha.js').describe,
	it = require('mocha/lib/mocha.js').it,
	expect = require('chai').expect,
	supertest = require('supertest'),
	app = require('../../app/server');

describe('Test application api', function () {
	describe('when calling echo', function () {
		it('should return http status ok(200)', function (done) {
			supertest(app)
				.get('/echo/1')
				.expect(200)
				.end(function (err, res) {
					expect(res.status).to.equal(200);
					done();
				});
		});

		it('should return status ok with echo value', function (done) {
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
	});
});
