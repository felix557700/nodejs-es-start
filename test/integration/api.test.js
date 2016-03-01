var describe = require('mocha/lib/mocha.js').describe,
	it = require('mocha/lib/mocha.js').it,
	expect = require('chai').expect,
	supertest = require('supertest'),
	app = require('../../app/server');

describe('Test application api', function () {
	describe('when calling add', function () {
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

		it('should return sum of positive and negative number', function (done) {
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
});
