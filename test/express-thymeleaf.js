/* 
 * Copyright 2017, Emanuel Rabina (http://www.ultraq.net.nz/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env mocha */
'use strict';

const {assert}         = require('chai');
const sinon            = require('sinon');
const {TemplateEngine} = require('thymeleaf');

const expressThymeleaf = require('../express-thymeleaf');

/**
 * Tests for the express-thymeleaf bridge module.
 */
describe('express-thymeleaf', function() {

	let templateEngine;
	let processFileStub;

	beforeEach(function() {
		templateEngine = new TemplateEngine();
		processFileStub = sinon.stub(templateEngine, 'processFile');
	});

	afterEach(function() {
		processFileStub.restore();
	});


	it('Express template engine function for success', function(done) {
		let bridge = expressThymeleaf(templateEngine);
		processFileStub.resolves('success');
		bridge('template.html', {}, function(error, result) {
			assert.isNull(error);
			assert.strictEqual(result, 'success');
			done();
		});
	});

	it('Express template engine function for errors', function(done) {
		let bridge = expressThymeleaf(templateEngine);
		processFileStub.rejects(new Error('error'));
		bridge('template.html', {}, function(error, result) {
			assert.instanceOf(error, Error);
			assert.strictEqual(error.message, 'error');
			assert.isUndefined(result);
			done();
		});
	});
});
